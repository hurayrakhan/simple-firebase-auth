// DO NOT SHARE IT IN  PUBLIC


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB3S_BOVMaKDCxS5FQbFCm74r3oRnkI1-0",
  authDomain: "simple-firebase-auth-6bc87.firebaseapp.com",
  projectId: "simple-firebase-auth-6bc87",
  storageBucket: "simple-firebase-auth-6bc87.firebasestorage.app",
  messagingSenderId: "1021226885655",
  appId: "1:1021226885655:web:211ef313b1990adf847252"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);