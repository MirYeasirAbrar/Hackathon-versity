// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAINb6JaGeZED-39vwcZeO_JQbeaacOcuc",
  authDomain: "diucpc-64229.firebaseapp.com",
  projectId: "diucpc-64229",
  storageBucket: "diucpc-64229.firebasestorage.app",
  messagingSenderId: "1014620973896",
  appId: "1:1014620973896:web:39d9b1f5aaf4e65dcfa17d",
  measurementId: "G-W0ZLBDLKJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;