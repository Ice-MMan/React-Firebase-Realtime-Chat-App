// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTaxVqoXSPQNxWKC2v2YckTxqzjqrJhpo",
  authDomain: "chatapp-adb07.firebaseapp.com",
  projectId: "chatapp-adb07",
  storageBucket: "chatapp-adb07.appspot.com",
  messagingSenderId: "817144915144",
  appId: "1:817144915144:web:90796a46a6d7e82c54f1fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
