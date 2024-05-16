// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvVbbkWlXYDA-mVHeMeNhol7yrKPYQT3Q",
  authDomain: "vickro-e65af.firebaseapp.com",
  projectId: "vickro-e65af",
  storageBucket: "vickro-e65af.appspot.com",
  messagingSenderId: "878586573165",
  appId: "1:878586573165:web:a571e159e3eb8b303faa64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);