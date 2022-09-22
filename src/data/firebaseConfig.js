// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNPa2uhlaHhAwRtRQA-bqw3JJleVaU93o",
  authDomain: "rama-games.firebaseapp.com",
  projectId: "rama-games",
  storageBucket: "rama-games.appspot.com",
  messagingSenderId: "1000350312505",
  appId: "1:1000350312505:web:95792e344ca71cb0c985e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);