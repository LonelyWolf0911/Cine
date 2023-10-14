// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqN7qKjI99C7MDFDmcvuOA99dQNTkDzIo",
  authDomain: "practica-1-fd9a9.firebaseapp.com",
  projectId: "practica-1-fd9a9",
  storageBucket: "practica-1-fd9a9.appspot.com",
  messagingSenderId: "446373305125",
  appId: "1:446373305125:web:1a6d6c3800f9b2f00b58cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)