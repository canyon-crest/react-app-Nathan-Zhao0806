// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJuZ3j0pCeEQIRn_FgILk6AXJehDFp9NI",
  authDomain: "react-firebase-app-150a1.firebaseapp.com",
  projectId: "react-firebase-app-150a1",
  storageBucket: "react-firebase-app-150a1.firebasestorage.app",
  messagingSenderId: "520723230746",
  appId: "1:520723230746:web:deee2c049415ec8c3ca1a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();