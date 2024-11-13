import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

function SignUp() {
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
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your Username"/>
              <TextInput type="text" placeholder="Enter Username" id="username"/>
            </div>
            <div>
              <Label value="Your Email"/>
              <TextInput type="text" placeholder="Enter Email Address" id="email"/>
            </div>
            <div>
              <Label value="Your Password"/>
              <TextInput type="password" placeholder="Enter Password" id="password"/>
            </div>
            <Button>Sign Up</Button>
          </form>
          <div className="flex mt-4 gap-2">
            <span>Have An Account?</span><Link className="text-blue-700" to="/signin">Login</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp