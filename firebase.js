// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLbjOvdqTVGX5MeH-_SG3kxamBh_eoggk",
  authDomain: "react-notes-3bd1d.firebaseapp.com",
  projectId: "react-notes-3bd1d",
  storageBucket: "react-notes-3bd1d.appspot.com",
  messagingSenderId: "617760512307",
  appId: "1:617760512307:web:d4d3fd358e121c8bd80646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")