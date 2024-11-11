// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVtxaYvQZ5Er4S17CsugyKnmCglUxyfzc",
  authDomain: "clase-eda2.firebaseapp.com",
  projectId: "clase-eda2",
  storageBucket: "clase-eda2.firebasestorage.app",
  messagingSenderId: "609224189484",
  appId: "1:609224189484:web:754ba3a75a1bc6f391d389",
  measurementId: "G-5HFL75JFCR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
