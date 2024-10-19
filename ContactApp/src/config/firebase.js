// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3DX3VspC-JkfiM3iJAMARMHfoW80Ifzg",
  authDomain: "contactapp-b7483.firebaseapp.com",
  projectId: "contactapp-b7483",
  storageBucket: "contactapp-b7483.appspot.com",
  messagingSenderId: "395033315161",
  appId: "1:395033315161:web:df2aa733a0141802112e48",
  measurementId: "G-SL6Z4KDQWM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
const analytics = getAnalytics(app);