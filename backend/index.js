import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

// console.log("MongoDB URL:", process.env.MONGODB_URL);