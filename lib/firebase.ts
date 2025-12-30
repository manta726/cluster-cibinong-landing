// lib/firebase.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuNoIqpAyrc9zRRRhQ5WNoa34QO9HtFHU",
  authDomain: "cluster-cibinong.firebaseapp.com",
  projectId: "cluster-cibinong",
  storageBucket: "cluster-cibinong.firebasestorage.app",
  messagingSenderId: "23612882352",
  appId: "1:23612882352:web:e4019233be4641ba30ea75",
  measurementId: "G-RDYT1CLNBX"
};

// Initialize Firebase App
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Firestore
const db: Firestore = getFirestore(app);

// Analytics (hanya di browser)
let analytics: Analytics | null = null;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };
