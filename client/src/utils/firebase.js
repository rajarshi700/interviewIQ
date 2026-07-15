
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "aiinterviewer-98add.firebaseapp.com",
  projectId: "aiinterviewer-98add",
  storageBucket: "aiinterviewer-98add.firebasestorage.app",
  messagingSenderId: "573040301522",
  appId: "1:573040301522:web:dec83e8ce6fc552c28a40b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}