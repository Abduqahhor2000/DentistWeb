import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage"; 
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWTQr086mltOFDEfH1AkiGzA_wTv0-Mng",
  authDomain: "dentistlyweb.firebaseapp.com",
  databaseURL: "https://dentistlyweb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dentistlyweb",
  storageBucket: "dentistlyweb.appspot.com",
  messagingSenderId: "533721555200",
  appId: "1:533721555200:web:c9916490d410789c5353e5",
  measurementId: "G-214G6J9RFF"
};

 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;