import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './Routes/user.route.js';

dotenv.config();

const app = express();

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