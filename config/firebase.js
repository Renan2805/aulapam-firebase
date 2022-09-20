// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc-wo-3p2bs4I0kIc-o0Q4QJKlWIrhnx0",
  authDomain: "aula-pam-64084.firebaseapp.com",
  projectId: "aula-pam-64084",
  storageBucket: "aula-pam-64084.appspot.com",
  messagingSenderId: "233096219953",
  appId: "1:233096219953:web:5ca65506b0e2213b05b410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db }