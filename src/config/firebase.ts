// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7x34nDjsL0XSA3rnfBekKh6ul3V0-iss",
  authDomain: "social-media-project-92571.firebaseapp.com",
  projectId: "social-media-project-92571",
  storageBucket: "social-media-project-92571.appspot.com",
  messagingSenderId: "1049495196060",
  appId: "1:1049495196060:web:bb2954cbda31a4bb393859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);