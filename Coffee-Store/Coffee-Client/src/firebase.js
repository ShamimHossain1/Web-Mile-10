// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoGIZicjrlh2CmlqH4Uzsn7OACj8fApAk",
  authDomain: "fir-auth-9dc31.firebaseapp.com",
  projectId: "fir-auth-9dc31",
  storageBucket: "fir-auth-9dc31.firebasestorage.app",
  messagingSenderId: "716968370752",
  appId: "1:716968370752:web:fe4f2eac309bdb1fe5b5a5",
  measurementId: "G-C1YRF5TX1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
