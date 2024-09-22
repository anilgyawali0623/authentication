// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "authetication-9151c.firebaseapp.com",
  projectId: "authetication-9151c",
  storageBucket: "authetication-9151c.appspot.com",
  messagingSenderId: "667106998687",
  appId: "1:667106998687:web:b78995912c8a801e5c65aa",
  measurementId: "G-2LN572G1BS"
};


// Initialize Firebase
 export const app = initializeApp(firebaseConfig);