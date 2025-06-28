// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC785TkxNrKfN75ppKpqSfrEb5fqdU0jN0",
  authDomain: "foodwebsite-dbec1.firebaseapp.com",
  projectId: "foodwebsite-dbec1",
  storageBucket: "foodwebsite-dbec1.appspot.com", // ← fix typo here
  messagingSenderId: "777107587850",
  appId: "1:777107587850:web:f5afe67119f013ed7370f3",
  measurementId: "G-3J0YKM0JDW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
