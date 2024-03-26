const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController");
const { body } = require("express-validator");




router.post('/signup', body('first_name').trim().not().isEmpty().withMessage("First is Required"),
    body('first_name').trim().not().isEmpty().withMessage("First Name is Required"),
    body('last_name').trim().not().isEmpty().withMessage("Last Name is Required"),
    body('phone').trim().not().isEmpty().withMessage("Phone is Required"),
    body('email').trim().not().isEmpty().withMessage("Email is Required"),
    body('password').trim().not().isEmpty().withMessage("Password is Required"),
    userController.userSignUp);

module.exports = router