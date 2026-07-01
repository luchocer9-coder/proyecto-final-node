import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyA-PwYQSYZSK7usn4BMYnBH9gom4jJfWKA",
  authDomain: "backend-node-37cf4.firebaseapp.com",
  projectId: "backend-node-37cf4",
  storageBucket: "backend-node-37cf4.firebasestorage.app",
  messagingSenderId: "906454476488",
  appId: "1:906454476488:web:abe1613c5647b8d50867fd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);