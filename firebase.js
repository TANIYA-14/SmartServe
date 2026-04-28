// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9RjDtxk-P9NjRd5NtUT6yPFu8e6R1nkY",
  authDomain: "smartserve-838ba.firebaseapp.com",
  projectId: "smartserve-838ba",
  storageBucket: "smartserve-838ba.firebasestorage.app",
  messagingSenderId: "619562005808",
  appId: "1:619562005808:web:b07f3aff6327304a3684f5",
  measurementId: "G-5NY99L7BXQ"
};

// Init
const app = initializeApp(firebaseConfig);

// VERY IMPORTANT
export const auth = getAuth(app);
export const db = getFirestore(app);
