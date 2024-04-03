// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhYzsFY7F88Qw7VVxH_pKyUpBThFXL9WQ",
  authDomain: "misinew-web.firebaseapp.com",
  projectId: "misinew-web",
  storageBucket: "misinew-web.appspot.com",
  messagingSenderId: "237964663925",
  appId: "1:237964663925:web:c942a3822fcbec07d42c3c",
  measurementId: "G-6EBW75JMPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);