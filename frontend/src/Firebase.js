// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBASTQ_4PzHmHTT7Rx1xhVoTTxSrbUjOZk",
  authDomain: "mern-blog-2e152.firebaseapp.com",
  projectId: "mern-blog-2e152",
  storageBucket: "mern-blog-2e152.firebasestorage.app",
  messagingSenderId: "52792297671",
  appId: "1:52792297671:web:3ae5f9809c7079d7dd96e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);