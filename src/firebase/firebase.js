// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC785TkxNrKfN75ppKpqSfrEb5fqdU0jN0",
  authDomain: "foodwebsite-dbec1.firebaseapp.com",
  projectId: "foodwebsite-dbec1",
  storageBucket: "foodwebsite-dbec1.appspot.com",
  messagingSenderId: "777107587850",
  appId: "1:777107587850:web:f5afe67119f013ed7370f3",
  measurementId: "G-3J0YKM0JDW",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Export Firebase Services
export const db = getFirestore(app); // Firestore DB
export const auth = getAuth(app); // Firebase Auth
export const googleProvider = new GoogleAuthProvider(); // Google Auth Provider
export const storage = getStorage(app); // Firebase Storage for profile images

export default app;
