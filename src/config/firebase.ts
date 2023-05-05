// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeZYBVtQBhnV6J6vJMirihvsjzOTwzCRo",
  authDomain: "next-blog-app-b98ce.firebaseapp.com",
  projectId: "next-blog-app-b98ce",
  storageBucket: "next-blog-app-b98ce.appspot.com",
  messagingSenderId: "901804825516",
  appId: "1:901804825516:web:4945f87972ba64aeebf809",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
