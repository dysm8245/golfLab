// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "./firebase.config"


// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const storage = getStorage(Firebase)
export const provider = new GoogleAuthProvider()