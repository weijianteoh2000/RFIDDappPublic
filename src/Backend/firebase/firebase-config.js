// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, this is the connection key connect
// to your firebase.
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOcDdQUIbYaug9tc-3PjStge6iLDQBBg4",
  authDomain: "hci-rfid-dapp.firebaseapp.com",
  databaseURL: "https://hci-rfid-dapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hci-rfid-dapp",
  storageBucket: "hci-rfid-dapp.firebasestorage.app",
  messagingSenderId: "736086721614",
  appId: "1:736086721614:web:ba57491f41c37b5b8aaf1f",
  measurementId: "G-W16SPHR5PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
// test 3