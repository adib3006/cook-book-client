// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrLnPrJoP70arVdGjrftfJR1eJuHXMVak",
  authDomain: "cook-book-bd83d.firebaseapp.com",
  projectId: "cook-book-bd83d",
  storageBucket: "cook-book-bd83d.appspot.com",
  messagingSenderId: "159272094462",
  appId: "1:159272094462:web:0c96cc17a801e94577f3af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;