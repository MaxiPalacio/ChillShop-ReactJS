// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1QUUA2cx3K3RD75YRP7YwqcEktYh8koU",
  authDomain: "thechillshop-f99b8.firebaseapp.com",
  projectId: "thechillshop-f99b8",
  storageBucket: "thechillshop-f99b8.appspot.com",
  messagingSenderId: "370164970488",
  appId: "1:370164970488:web:4a34cbdee75e7c610e9c0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)