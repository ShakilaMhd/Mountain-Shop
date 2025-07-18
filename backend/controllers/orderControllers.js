import orderModel from "../models/orderModels.js"
import userModel from "../models/userModel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// global variables
const currency = 'تومان'
const deliveryCharge = 12


// order data for admin panel
const allOrder = async (req, res) => {
    try {
        const orders = await orderModel.find({})

        res.json({ success: true, orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

// order data for frontend
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body

        const orders = await orderModel.find({ userId })

        res.json({ success: true, orders })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// placing order using cash on delivery
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "پرداخت نقدی هنگام تحویل",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);

        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {
            cartData: {}
        })

        res.json({ success: true, message: "سفارش قرارداده شد " })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// placing order using stripe
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body
        const { origin } = req.headers

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "stripe",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)

        await newOrder.save()

        const line_items = items.map((item) => ({
            price_Data: {
                currency: currency,
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity
        }))

        line_items.push({
            price_Data: {
                currency: currency,
                product_data: {
                    name: "هزینه تحویل"
                },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        })

        res.json({ success: true, session_url: session.url })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// placing order using razorPay
const placeOrderRazorpay = async (req, res) => { }

// handle updating status from admin panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body

        await orderModel.findByIdAndUpdate(orderId, { status })

        res.json({ success: true, message: 'وضعیت آپدیت شد' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//remove the order 
const removeOrder = async (req, res) => {
    try {
        await orderModel.findByIdAndDelete(req.body._id)
        res.json({ success: true, message: "order deleted" })
    } catch (error) {
        console.log("error:", error.message)
        res.json({ success: false, error: error.message })
    }
}



export { allOrder, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, removeOrder }