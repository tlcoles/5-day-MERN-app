// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyjbHVAFmO1AfXxVjT4M3tmUgHTXXiGfg",
  authDomain: "daymernapp.firebaseapp.com",
  projectId: "daymernapp",
  storageBucket: "daymernapp.appspot.com",
  messagingSenderId: "525082622735",
  appId: "1:525082622735:web:da623bb501938b289c9c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider }; 