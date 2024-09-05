// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDND2hVWNDFKehmOAi9k8fHAuiSF5wO0Hw",
  authDomain: "reactloginsigninwithdatabase.firebaseapp.com",
  projectId: "reactloginsigninwithdatabase",
  storageBucket: "reactloginsigninwithdatabase.appspot.com",
  messagingSenderId: "709793989992",
  appId: "1:709793989992:web:6b25ed688db8b0dd4b02dd"
};      
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { auth, database  };
   