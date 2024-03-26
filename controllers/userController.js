// const { validationResult } = require("express-validator")
const User = require('../model/user.model')

// exports.userSignUp = async (req, res) => {
const userSignUp = async (req, res) => {
    try {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     res.status(400).send({
        //         errors: errors.array(),
        //         message: 'validation error'
        //     })
        // } else {
        // const finduser = await User.findOne({ _id: email });
        // if (finduser) {
        //     return res.status(400).json({ error: "Email already exist" })
        // }
        const { first_name, last_name, email, password, phone, username } = req.body;
        console.log(first_name, last_name, email, phone, password, username)
        const user = new User({ first_name, last_name, email, password, phone })
        const savedUser = await user.save();
        return res.status(201).json(savedUser);
        // }
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }

}

module.exports = { userSignUp }