import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFSmVOXd1Ke6KctOuAgbpM6nPOofpKEFA",
  authDomain: "maryam-elesikeh.firebaseapp.com",
  projectId: "maryam-elesikeh",
  storageBucket: "maryam-elesikeh.firebasestorage.app",
  messagingSenderId: "721730957702",
  appId: "1:721730957702:web:f314b7b1ebca9ef051bc07",
  measurementId: "G-Q5207Y5CD1",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
