import User from '../Model/user.model.js';
import bcryptjs from 'bcryptjs';
export const signup = async (req,res)=>{
    const {username, email, password} = req.body;
    if(!password || !username || !email || password ==='' || email === ''|| username === ''){
        res.status(400).json({message : `Can't Signup`})
    }
    const hashedpassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, 
        email, 
        password: hashedpassword});

    try {
        await newUser.save();
    res.json("Signup succesfully");
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}