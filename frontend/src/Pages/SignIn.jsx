
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { useState } from "react"
import { Link , useNavigate} from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import GoogleOAuth from "../Components/GoogleOAuth";


function SignIn() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const {loading, error : errorMessage} = useSelector((state)=>state.user);
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.id]:e.target.value.trim()})
    console.log(formData);
  }

  const handleSubmit = async (e) =>{
      e.preventDefault();
      if(!formData.email || !formData.password){
        return dispatch(signInFailure("Please fill out all fields."));
      }
     try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin",{
        method: "POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(formData),
      });
      const data = await res.json();

      if(data.success === false){
        return dispatch(signInFailure(data.message));
      }
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
     } catch (error) {
        dispatch(signInFailure(error.message));
     }
    }
  return (
    <>
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
        <Link to="/" className="font-bold dark:text-white text-4xl">
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Suri&rsquo;s</span>Blog
        </Link>
        <p className="text-sm mt-5">This is a Demo blog project.</p>
        </div>
        <div  className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
           
            <div>
              <Label value="Your Email"/>
              <TextInput type="email" placeholder="Enter Email Address" id="email" onChange={handleChange}/>
            </div>
            <div>
              <Label value="Your Password"/>
              <TextInput type="password" placeholder="Enter Password" id="password" onChange={handleChange}/>
            </div>
            <Button type="submit" disabled={loading}>
              {
                loading ? <>
                <Spinner/>
                <span className="pl-5 text-xl">Loading...</span>
                </> : 'Sign In'
              }</Button>
              <GoogleOAuth/>
          </form>
          <div className="flex mt-4 gap-2">
            <span>Dont Have an Account?</span><Link className="text-blue-700" to="/signup">Sign Up</Link>
          </div>
          {
            errorMessage && 
            <Alert className="mt-5 text-red-600 bg-slate-100 text-md font-bold">
              {errorMessage}
            </Alert>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn