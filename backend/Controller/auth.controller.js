import User from '../Model/user.model.js';
export const signup = async (req,res)=>{
    const {username, email, password} = req.body;
    if(!password || !username || !email || password ==='' || email === ''|| username === ''){
        res.status(400).json({message : `Can't Signup`})
    }

    const newUser = new User({username, email, password});

    try {
        await newUser.save();
    res.json("Signup succesfully");
    } catch (error) {
        res.status(500).json({message : error.message});
    }
}