// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2RQK53-lBK6MLq7xD3SVPLyozHBwpXtU",
    authDomain: "todowithdatabase-5a320.firebaseapp.com",
    projectId: "todowithdatabase-5a320",
    storageBucket: "todowithdatabase-5a320.appspot.com",
    messagingSenderId: "496965271094",
    appId: "1:496965271094:web:eccaf6aaa25420c3772297"
  };
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { auth, database };
   