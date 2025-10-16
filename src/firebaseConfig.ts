import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Prefer env when available (Vite: import.meta.env.VITE_*)
const firebaseConfig = {
  apiKey: (import.meta as any).env?.VITE_FIREBASE_API_KEY || "AIzaSyBGcXTF3yuvVd6z2e5B4g4zf_86XhIKKKE",
  authDomain: (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN || "coderealm-37f3c.firebaseapp.com",
  projectId: (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID || "coderealm-37f3c",
  // Correct default bucket format is <project-id>.appspot.com
  storageBucket: (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET || "coderealm-37f3c.appspot.com",
  messagingSenderId: (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "893839377617",
  appId: (import.meta as any).env?.VITE_FIREBASE_APP_ID || "1:893839377617:web:bb5cc996e7ced5df4fb1f0",
  measurementId: (import.meta as any).env?.VITE_FIREBASE_MEASUREMENT_ID || "G-NTFTY40QCV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export { app };