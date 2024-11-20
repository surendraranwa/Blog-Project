import User from '../Model/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../Utils/error.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
export const signup = async (req, res, next)=>{
    const {username, email, password} = req.body;
    if(!password || !username || !email || password ==='' || email === ''|| username === ''){
        // res.status(400).json({message : `Can't Signup`})
        next(errorHandler(400, "All Fields are required."))
    }
    const hashedpassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username, 
        email, 
        password: hashedpassword});

    try {
        await newUser.save();
        return res.status(201).json({ message: "Signup successfully" });
    // res.json("Signup succesfully");
    } catch (error) {
        // res.status(500).json({message : error.message});
        next(error);
    }
}

export const signin = async (req, res, next)=>{
   const {email, password} = req.body;

   if(!email || !password || email === ''|| password === ''){
    return next(errorHandler(404, "User Not Found."))
   }

   try {
    const validUser = await User.findOne({email});
    if(!validUser){
        return next(errorHandler(404, "Invalid Username."))
    }

    const validpassword = bcryptjs.compareSync(password, validUser.password);
    if(!validpassword){
        return next(errorHandler(404, "Invalid Passowrd."))
    }

    const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET);
    const {password : pass, ...rest} = validUser._doc;
    res.status(200).cookie("access_token", token, {httpOnly : true}).json(rest);
    
   } catch (error) {
    next(error);
   }
}

export const google = async (req, res, next)=>{
    const {name, email, photoURL} = req.body;

    try {
        const validUser = await User.findOne({email});
        if(validUser){
            const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET);
            const {password, ...rest} = validUser._doc;
            res.status(200).cookie("access_token", token, {httpOnly : true}).json(rest);
        }else{
            const Genratepassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(Genratepassword, 10);
            const newUser = new User({
                username :name.toLowerCase().split(" ").join('') + Math.random().toString(9).slice(-4), 
                email, 
                password: hashedPassword,
                photoUrl : photoURL,
            });
            await newUser.save();
            const token = jwt.sign({id : newUser._id}, process.env.JWT_SECRET);
            const {password, ...rest} = newUser._doc;
            res.status(200).cookie("access_token", token, {httpOnly : true}).json(rest);
           
        }
    } catch (error) {
        next(error);
    }
}