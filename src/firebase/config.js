// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvvGp4tZxIitl8xW1Kbcsu4e8V-qIhlNI",
  authDomain: "mf-glasvezelinstallatie.firebaseapp.com",
  projectId: "mf-glasvezelinstallatie",
  storageBucket: "mf-glasvezelinstallatie.appspot.com",
  messagingSenderId: "100736285613",
  appId: "1:100736285613:web:b169e9d316ffb21db3ff24"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
const auth = getAuth()

export { db, auth }