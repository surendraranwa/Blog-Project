import { Button, TextInput } from "flowbite-react";
import { useSelector } from "react-redux";

function DashProfile() {
    const {currentUser} = useSelector((state)=> state.user);
  return (
    <div className="flex flex-col mx-auto p-5 mt-5 w-full">
    <h1 className="font-semibold text-3xl self-center">Profile</h1>
     <form className="flex flex-col gap-4 items-center ">
     <div className="flex justify-center items-center w-32 h-32 rounded-full cursor-pointer overflow-hidden shadow-md object-cover">
        <img src={currentUser.photoUrl} alt="User" className="rounded-full border-8 border-[ligthgrey]"/>
    </div>
    <TextInput type="text" placeholder="username" id="username" defaultValue={currentUser.username} className="w-[60%]"/>
    <TextInput type="email" placeholder="email" id="email" defaultValue={currentUser.email} className="w-[60%]"/>
    <TextInput type="password" placeholder="password" id="password" className="w-[60%]"/>
    <Button className="w-[60%]">Update</Button>
     </form>
     <div className="w-[60%] flex justify-between mx-auto mt-5 text-red-500">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
     </div>
    </div>
  )
}

export default DashProfile;