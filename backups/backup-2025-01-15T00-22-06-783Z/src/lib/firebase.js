import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBg5oJij5yV7Kr3jrvnRtBrMnufm6WW74I",
  authDomain: "website-cyber-987ae.firebaseapp.com",
  projectId: "website-cyber-987ae",
  storageBucket: "website-cyber-987ae.firebasestorage.app",
  messagingSenderId: "72601101616",
  appId: "1:72601101616:web:ee3924f39aa3022d31d4f5",
  measurementId: "G-R0JBTBNRTJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);