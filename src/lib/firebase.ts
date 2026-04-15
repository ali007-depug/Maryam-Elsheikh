import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "maryam-elsheikh.firebaseapp.com",
  projectId: "maryam-elsheikh",
  storageBucket: "maryam-elsheikh.firebasestorage.app",
  messagingSenderId: import.meta.env.SENDER_ID,
  appId: import.meta.env.APP_ID,
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
