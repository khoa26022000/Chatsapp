// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjRZd66hNP2JmIPxpOX8Su8SA8GGw3FVQ",
  authDomain: "whats-app-293e8.firebaseapp.com",
  projectId: "whats-app-293e8",
  storageBucket: "whats-app-293e8.appspot.com",
  messagingSenderId: "46574337522",
  appId: "1:46574337522:web:b4eec101e3ca06d287ff6b"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db,auth,provider}