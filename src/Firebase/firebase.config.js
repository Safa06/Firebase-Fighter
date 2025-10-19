// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQuiesVoP16IxCYJ5-vEtr7coueLLb4Tg",
  authDomain: "fir-fighter-94581.firebaseapp.com",
  projectId: "fir-fighter-94581",
  storageBucket: "fir-fighter-94581.firebasestorage.app",
  messagingSenderId: "221217616537",
  appId: "1:221217616537:web:eebacb96ea43c19682be08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);