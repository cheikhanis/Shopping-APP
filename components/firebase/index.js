// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import{
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,

} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNa2vdDrYJ6NZ7BCvcmbeHS-2eVHzGRRk",
  authDomain: "shopping-app-yt-1761d.firebaseapp.com",
  projectId: "shopping-app-yt-1761d",
  storageBucket: "shopping-app-yt-1761d.appspot.com",
  messagingSenderId: "643304230622",
  appId: "1:643304230622:web:4d48c9409ab1e3d1f63c4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{ app, db, getFirestore, collection, addDoc };