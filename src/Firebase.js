// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdUACLEAfobxgWIGWZ8QOuseJ9iuVSR60",
  authDomain: "greenote-d2774.firebaseapp.com",
  projectId: "greenote-d2774",
  storageBucket: "greenote-d2774.appspot.com",
  messagingSenderId: "405853395182",
  appId: "1:405853395182:web:4e1b0d235f5f6ca3dcfbff",
  measurementId: "G-0W60V47Q5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;