// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMLTJyVsly5Iue23CY5YAFvNZRcU2GS4I",
  authDomain: "netflix-c-1607e.firebaseapp.com",
  projectId: "netflix-c-1607e",
  storageBucket: "netflix-c-1607e.appspot.com",
  messagingSenderId: "564428621529",
  appId: "1:564428621529:web:23e4b789f4a2bb4aa960c8",
  measurementId: "G-04NJLK7BMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();