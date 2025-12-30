// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCuNoIqpAyrc9zRRRhQ5WNoa34QO9HtFHU",
  authDomain: "cluster-cibinong.firebaseapp.com",
  projectId: "cluster-cibinong",
  storageBucket: "cluster-cibinong.firebasestorage.app",
  messagingSenderId: "23612882352",
  appId: "1:23612882352:web:e4019233be4641ba30ea75",
  measurementId: "G-RDYT1CLNBX"
};

// Initialize Firebase (hanya jika belum ada)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Analytics (hanya di browser)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
