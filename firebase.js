import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';



const firebaseConfig = {
    apiKey: "AIzaSyDxpqTtL_ZrEGfPM72R6yf5R6XzT3ciRo0",
    authDomain: "fb-clone-6ccc5.firebaseapp.com",
    projectId: "fb-clone-6ccc5",
    storageBucket: "fb-clone-6ccc5.appspot.com",
    messagingSenderId: "496582707263",
    appId: "1:496582707263:web:2caf0dd02ae2424a93908a",
    measurementId: "G-W4XN90R8LH"
  };

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
