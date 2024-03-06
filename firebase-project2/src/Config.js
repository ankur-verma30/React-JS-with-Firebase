// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1UL0J4XJQS-ZQ-luP9w8gnGPb77zJIKQ",
  authDomain: "project-2-d5197.firebaseapp.com",
  projectId: "project-2-d5197",
  storageBucket: "project-2-d5197.appspot.com",
  messagingSenderId: "1052391058831",
  appId: "1:1052391058831:web:5b7b7604e15bd77b6b6ffa"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const database=getFirestore(app);