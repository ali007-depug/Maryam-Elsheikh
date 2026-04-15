import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-788Lmp5TqyhMFBnvVM7r7uL5mSlJvkE",
  authDomain: "maryam-elsheikh.firebaseapp.com",
  projectId: "maryam-elsheikh",
  storageBucket: "maryam-elsheikh.firebasestorage.app",
  messagingSenderId: "878129120940",
  appId: "1:878129120940:web:899784d64ec0424dcf4109"
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
