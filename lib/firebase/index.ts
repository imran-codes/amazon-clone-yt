import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaI0NERbNrAkK30VtoWwkI9WpcBII6vp8",
  authDomain: "clone-yt-17891.firebaseapp.com",
  projectId: "clone-yt-17891",
  storageBucket: "clone-yt-17891.appspot.com",
  messagingSenderId: "947583258811",
  appId: "1:947583258811:web:5da59d681d1c3c7b92199e",
  measurementId: "G-ZR2V969EZ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
