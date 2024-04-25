// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//object
//ye sab firebase pr milega
const firebaseConfig = {
  apiKey: "AIzaSyAMpJa_R-cZ2UMYFTp_onAv7JvxOxtADrE",
  authDomain: "react-firebase-ad2d1.firebaseapp.com",
  projectId: "react-firebase-ad2d1",
  storageBucket: "react-firebase-ad2d1.appspot.com",
  messagingSenderId: "322995163600",
  appId: "1:322995163600:web:61ec7d93564d570e54e9d5",
  measurementId: "G-WLYDCBN7EE"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//exporting because we have to use this Authentication functionality
export const auth =getAuth(app);

