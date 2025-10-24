// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdoGNhKziEGlvNdw-1NAF_IYo0QRxbHb8",
  authDomain: "aceloop-6ad31.firebaseapp.com",
  projectId: "aceloop-6ad31",
  storageBucket: "aceloop-6ad31.appspot.com",
  messagingSenderId: "765144945852",
  appId: "1:765144945852:web:4e841bb57aff0d4eadecb9"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
