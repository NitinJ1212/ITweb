const express = require('express');
const app = express();
// const { body, param } = require('express-validator');
// const { userSignUp } = require('./controllers/userController');
const mongoose = require("mongoose")
const userRouter = require('./router/userRouter')
app.use(express.json())

const uri = 'mongodb://localhost:27017/newtest';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));


app.use('/api', userRouter)
// app.post('/api',
//     body('first_name').trim().not().isEmpty().withMessage('First Name is required'),
//     body('last_name').trim().not().isEmpty().withMessage('Last Name is required'),
//     body('email').trim().isEmail().not().isEmpty().withMessage('Invalid email'),
//     body('phone').trim().isLength({ min: 10 }).withMessage('Invalid phone'),
//     body('password').trim().isLength({ min: 8 }).withMessage('Invalid password'),
//     userSignUp);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
