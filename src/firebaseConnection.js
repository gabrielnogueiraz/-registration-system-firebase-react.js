import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQF4n8V2n3aJsa1B81qkpCBxVxrKNtjdw",
  authDomain: "login-page-26381.firebaseapp.com",
  projectId: "login-page-26381",
  storageBucket: "login-page-26381.appspot.com",
  messagingSenderId: "695169196916",
  appId: "1:695169196916:web:372599b2fcc9f836e7c221",
  measurementId: "G-7S1Y4YFX7F",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
