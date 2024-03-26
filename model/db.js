const mongoose = require("mongoose");

// mongodb+srv://Kanishk:0P6jfriITIWdKzcr@cluster0.t1anyno.mongodb.net/artsmilly?retryWrites=true&w=majority
// mongoose.connect("mongodb://127.0.0.1:27017/first",{ useNewUrlParser: true, useUnifiedTopology: true },
//     { useFindAndModify: false },
//     (err) => {
//         if (!err) {
//             console.log("MongoDB Connection Succeeded.");
//         } else {
//             console.log("Error in DB connection : " + err);
//         }
//     }
// );

const uri = 'mongodb://localhost:27017/newtest';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

// mongoose.connect(
//   "mongodb+srv://Abikem01:Abikem01Abikem01@cluster0.kzbzior.mongodb.net/projectA?retryWrites=true&w=majority",
//   { useNewUrlParser: true },
//   (err) => {
//     if (!err) {
//       console.log("MongoDB Connection Succeeded.");
//     } else {
//       console.log("Error in DB connection : " + err);
//     }
//   }
// );

require("./user.model");