// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase 

const firebaseConfig = {
  apiKey: "AIzaSyDCIqclTNlTRg3gcERWU6jcGGrDZoeall0",
  authDomain: "v2-login-invernadero.firebaseapp.com",
  databaseURL: "https://v2-login-invernadero-default-rtdb.firebaseio.com",
  projectId: "v2-login-invernadero",
  storageBucket: "v2-login-invernadero.appspot.com",
  messagingSenderId: "790819209856",
  appId: "1:790819209856:web:ad3b042af7b38d5a379c65"
};


// const firebaseConfig = {
// apiKey: "AIzaSyBzZk7LgA3xujSZbCe7i5pQJXoRXNJjlL8",
// authDomain: "invernadero-dbceb.firebaseapp.com",
// databaseURL: "https://invernadero-dbceb-default-rtdb.firebaseio.com",
// projectId: "invernadero-dbceb",
// storageBucket: "invernadero-dbceb.appspot.com",
// messagingSenderId: "662423745784",
// appId: "1:662423745784:web:e7eab4ab6c518b232eb70d",
// measurementId: "G-F652HCZ93V"
// };

if(firebase.apps.length == 0){
  firebase.initializeApp(firebaseConfig);
}
// Initialize Firebase
const db = getDatabase();
export {db}