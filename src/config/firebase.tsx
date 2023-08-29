// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEXagrtZuhjLYrgG1ANYKQ-hqdu4BL5HA",
  authDomain: "gymapp-294a1.firebaseapp.com",
  projectId: "gymapp-294a1",
  storageBucket: "gymapp-294a1.appspot.com",
  messagingSenderId: "470341150804",
  appId: "1:470341150804:web:f0ebb53660b4686f5925c1",
  measurementId: "G-KZ0DKTC6SM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
