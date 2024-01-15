// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFbgAhs6qOlo9smPrheswFfX0Up8iRvxc",
  authDomain: "netflixgpt-6d4b9.firebaseapp.com",
  projectId: "netflixgpt-6d4b9",
  storageBucket: "netflixgpt-6d4b9.appspot.com",
  messagingSenderId: "209281541582",
  appId: "1:209281541582:web:6c6864effbb84a45aef79f",
  measurementId: "G-HQ38N1PJMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth()