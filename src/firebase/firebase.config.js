// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyYXe_Nc43RAWgAYRJNZd5yu0sXIoHo-0",
  authDomain: "library-management-85f83.firebaseapp.com",
  projectId: "library-management-85f83",
  storageBucket: "library-management-85f83.appspot.com",
  messagingSenderId: "148303512101",
  appId: "1:148303512101:web:7c4f9cb051185dc571b5cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
