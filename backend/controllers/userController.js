import validator from 'validator'
import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Incorrect password" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })    
    }
}

const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body

        //check if user exist allready
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.status(400).json({ msg: "user already exists" })
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email address" })
        }
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Enter the strong password" })
        }

        //hash user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //create user
        const newUser = new userModel({
            name, email, password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const adminLogin = async (req, res) => {
    res.json({ msg: "adminlogin Working" })
    try {

    } catch (error) {

    }
}

export { loginUser, registerUser, adminLogin }