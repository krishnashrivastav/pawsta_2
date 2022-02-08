// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04Ek3ske_cY4_i4bMXfz0ZV9AKDsbVTc",
  authDomain: "pawsta2-204ff.firebaseapp.com",
  projectId: "pawsta2-204ff",
  storageBucket: "pawsta2-204ff.appspot.com",
  messagingSenderId: "712652198063",
  appId: "1:712652198063:web:3ce1a4f3ac4e8a9b33c45a",
  measurementId: "G-N4FBZ1FQ2F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db =getFirestore();
const storage =getStorage();

export { app, db, storage };