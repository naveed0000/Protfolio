import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

  apiKey: "AIzaSyBGjOmBWmYIJmApLG6KUuxTK7ZDnIl6ToI",
  authDomain: "portfolio-505b1.firebaseapp.com",
  projectId: "portfolio-505b1",
  storageBucket: "portfolio-505b1.appspot.com",
  messagingSenderId: "323444720232",
  appId: "1:323444720232:web:6adb45a2f4d0e5c023b1dd",
  measurementId: "G-7MK1F2X61J"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);