// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIlDCK_YuF5mwHjZzeha4SW9Csn5ILTCo",
  authDomain: "tah57-ta.firebaseapp.com",
  projectId: "tah57-ta",
  storageBucket: "tah57-ta.firebasestorage.app",
  messagingSenderId: "658558354411",
  appId: "1:658558354411:web:893aa2c72247bd8f570fae",
  measurementId: "G-PFG6K86FQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);



// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);