// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUWe9CitmENYCM1unb7lAdRnQLLUv5BFI",
    authDomain: "warehouse-management-almaskhan.firebaseapp.com",
    projectId: "warehouse-management-almaskhan",
    storageBucket: "warehouse-management-almaskhan.appspot.com",
    messagingSenderId: "948363028187",
    appId: "1:948363028187:web:f961f6eaee2ca39ba80efe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;