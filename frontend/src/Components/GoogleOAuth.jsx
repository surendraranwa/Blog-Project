import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import {GoogleAuthProvider,signInWithPopup, getAuth} from 'firebase/auth'
import { app } from "../Firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function GoogleOAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = getAuth(app);
    const handleGoogleLogin = async () =>{
       const provider = new GoogleAuthProvider();
       provider.setCustomParameters({prompt: 'select_account'});
       try {
        const resultsFromGoogle = await signInWithPopup(auth, provider);
        const res = await fetch("/api/auth/google", {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                usename : resultsFromGoogle.displayName,
                email: resultsFromGoogle.email,
                photoURL : resultsFromGoogle.photoURL
            })
        });
        const data = res.json();
        if(res.Ok){
            dispatch(signInSuccess(data));
            navigate("/");
        }
       } catch (error) {
         console.log(error)
       }
    }

  return (
    <>
    <Button type="button" className="bg-blue-700 flex" onClick={handleGoogleLogin}>
        <AiFillGoogleCircle className="text-2xl mr-5"/> <span className="text-xl">Continure With Google</span>
        </Button>
    </>
  ) 
}

export default GoogleOAuth;