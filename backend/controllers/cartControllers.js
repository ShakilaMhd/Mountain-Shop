import userModel from "../models/userModel"

const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body
        const userData = await userModel.findById(userId)

        let cartData = await userData.cartData

        if (!userData) {
            return res.status(404).json({ success: false, message: "کاربر پیدا نشد" })
        }

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = { [size]: 1 }
        }

        await userModel.findByIdAndUpdate(userId, { cartData })

        res.json({ success: true, message: "به کارت اضافه شد" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
const updateCart = async (req, res) => { }
const getUserCart = async (req, res) => { }

export { addToCart, updateCart, getUserCart }