import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './Routes/user.route.js';
import authRoute from './Routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());

app.listen(4000, ()=>{
    console.log("Your Server is Running on Port 4000.")
});

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Succesfully Connected")
}).catch((err)=>{
    console.error(err)
});
// Create Test API 
// app.get('/test', (req,res)=>{
//     res.send( "Hello , Succesful API.")
// });

app.use('/api/user', userRoute);

//SignUp Endpoint
app.use('/api/auth', authRoute);

//Add a middleware to for error message 

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});