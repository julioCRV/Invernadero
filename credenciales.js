// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCIqclTNlTRg3gcERWU6jcGGrDZoeall0",
  authDomain: "v2-login-invernadero.firebaseapp.com",
  projectId: "v2-login-invernadero",
  storageBucket: "v2-login-invernadero.appspot.com",
  messagingSenderId: "790819209856",
  appId: "1:790819209856:web:ad3b042af7b38d5a379c65"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase