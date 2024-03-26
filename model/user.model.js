const mongoose = require("mongoose");


var userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: "This field is required.",
        unique: true
    },
    last_name: {
        type: String,
        required: "This field is required.",
        unique: true
    },
    phone: {
        type: Number,
        required: "This field is required.",
        unique: true
    },
    email: {
        type: String,
        required: "This field is required.",
        unique: true
        // unique: true
    },
    password: {
        type: String,
        required: "This field is required."
    }
})


userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, "Invalid e-mail");


const User = mongoose.model('User', userSchema);

module.exports = User;
// mongoose.model("User", userSchema)