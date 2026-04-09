import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervai-3e149.firebaseapp.com",
  projectId: "intervai-3e149",
  storageBucket: "intervai-3e149.firebasestorage.app",
  messagingSenderId: "1023468906526",
  appId: "1:1023468906526:web:69cadcfb149215839b260f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }