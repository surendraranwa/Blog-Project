import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        unique: true,
    },
    email:{
        type:String,
        require: true,
        unique: true,
    },
    password:{
        type:String,
        require: true,
    },
    photoUrl:{
        type: String,
        default: "https://lh3.googleusercontent.com/a/ACg8ocJCctaQedLWlHH8_zWqreI9DRRjWNqML-9dGH2tJb0ScXs_tYJQ=s96-c",
    }
    
},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;