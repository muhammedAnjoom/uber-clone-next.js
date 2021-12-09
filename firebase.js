// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeXbXmcSzdyReMLRWzJ3HRFAOXhxmVuYY",
  authDomain: "uber-clone-2a8d4.firebaseapp.com",
  projectId: "uber-clone-2a8d4",
  storageBucket: "uber-clone-2a8d4.appspot.com",
  messagingSenderId: "513827069142",
  appId: "1:513827069142:web:ffa3953a12a9f893903d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth} 