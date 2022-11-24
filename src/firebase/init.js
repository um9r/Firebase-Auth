// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMQOxziHwnGgVFsFINT5nU4f4QPDlVbhE",
  authDomain: "fir-practise-de2b5.firebaseapp.com",
  projectId: "fir-practise-de2b5",
  storageBucket: "fir-practise-de2b5.appspot.com",
  messagingSenderId: "511357733691",
  appId: "1:511357733691:web:4150fca5d1df8c8369451e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
