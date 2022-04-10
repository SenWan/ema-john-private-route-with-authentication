// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0lJD16BzuwIEFMmrwE77slE14Fk1yK70",
  authDomain: "ema-john-simple-a4304.firebaseapp.com",
  projectId: "ema-john-simple-a4304",
  storageBucket: "ema-john-simple-a4304.appspot.com",
  messagingSenderId: "873321596834",
  appId: "1:873321596834:web:ff5e455e8c3d2a1f78d4fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;