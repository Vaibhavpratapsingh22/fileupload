// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZOyb5pPok7eaYY5f6NzYunp55nPhiJmo",
  authDomain: "fileupload-web.firebaseapp.com",
  projectId: "fileupload-web",
  storageBucket: "fileupload-web.appspot.com",
  messagingSenderId: "365418883224",
  appId: "1:365418883224:web:984f589597c6db7ca348ed",
  measurementId: "G-PZ82C0TNX6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
