import express from 'express'
import { allOrder, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderControllers.js'
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/auth.js"

const orderRouter = express.Router()

// admin features
orderRouter.post('/list', adminAuth, allOrder)
orderRouter.post('/status', adminAuth, updateStatus)

// payment features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrderRazorpay)

// user feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter