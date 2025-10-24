// TODO: Add SDKs for Firebase products that you want to use

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB7Umy5xX2wjX45vtQ-lDIIHC2rgQoL2GI",
  authDomain: "gan-chi.firebaseapp.com",
  databaseURL: "https://gan-chi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gan-chi",
  storageBucket: "gan-chi.firebasestorage.app",
  messagingSenderId: "558322693539",
  appId: "1:558322693539:web:e5bf2d1cafe0b1869a5616",
  measurementId: "G-2X95CVWQBY",
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);
