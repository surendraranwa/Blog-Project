import User from '../Model/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../Utils/error.js';
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