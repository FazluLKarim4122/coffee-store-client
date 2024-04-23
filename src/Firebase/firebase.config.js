// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_APIKEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

// apiKey: "AIzaSyCkIbnlP5npSouVxMNLnQrAt0je3I3sYvI",
// authDomain: "coffee-store-94bc2.firebaseapp.com",
// projectId: "coffee-store-94bc2",
// storageBucket: "coffee-store-94bc2.appspot.com",
// messagingSenderId: "124475632793",
// appId: "1:124475632793:web:1f18905759acc290439c08"