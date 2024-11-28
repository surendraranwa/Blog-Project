import { Button, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
// import {getStorage, uploadBytesResumable, ref, getDownloadURL} from 'firebase/storage';
// import { app } from "../Firebase";

function DashProfile() {
   const { currentUser } = useSelector((state) => state.user);
   const [selectImage, setSelectImage] = useState(null);
   const [selectImageUrl, setSelectImageURL] = useState(null);
   // const [imageUploadProgress, setImageUploadProgress] = useState(null);
   // const [imageUploadError, setImageUploadError] = useState(null);
   console.log(selectImage)
   const filePickerRef = useRef();
   // console.log(selectImageUrl, imageUploadProgress);
   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setSelectImage(file);
         setSelectImageURL(URL.createObjectURL(file));
      }
   };



   // const UpDateImage = ()=>{
   //     const storage = getStorage(app);
   //     const fileName = new Date().getTime()+ selectImage.name;
   //     const storageRef = ref(storage, fileName);
   //     const uploadTask = uploadBytesResumable(storageRef, selectImage);

   //     uploadTask.on(
   //         'state_changed',
   //         (snapshot)=>{
   //             const progress = (snapshot.bytesTransferred/ snapshot.totalBytes) * 100;
   //             setImageUploadProgress(progress.toFixed(0))
   //         },
   //         // (error)=>{
   //         //     setImageUploadError("Could not Upload Image.")
   //         // },
   //         ()=>{
   //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
   //                 setSelectImageURL(downloadURL);
   //             })
   //         }
   //     );


   // }
   // useEffect(()=>{
   //     if(selectImage){
   //         UpDateImage();
   //     }
   // },[selectImage]);

   return (
      <div className="flex flex-col mx-auto p-5 mt-5 w-full">
         <h1 className="font-semibold text-3xl self-center">Profile</h1>
         <form className="flex flex-col gap-4 items-center ">
            <input type="file" accept="image/*" onChange={handleImageChange} ref={filePickerRef} hidden />
            <div className="flex justify-center items-center w-32 h-32 rounded-full cursor-pointer overflow-hidden shadow-md " onClick={() => filePickerRef.current.click()}>
               <img src={selectImageUrl || currentUser.photoUrl} alt="User" className="rounded-full w-full h-full border-8 object-cover border-[ligthgrey]" />
            </div>
            <TextInput type="text" placeholder="username" id="username" defaultValue={currentUser.username} className="w-[60%]" />
            <TextInput type="email" placeholder="email" id="email" defaultValue={currentUser.email} className="w-[60%]" />
            <TextInput type="password" placeholder="password" id="password" className="w-[60%]" />
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