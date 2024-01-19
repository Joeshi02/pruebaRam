import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClOIAXRx6wDAI-37Lk6Z6IO1coQEXGV7Y",
  authDomain: "prueba-b0c89.firebaseapp.com",
  projectId: "prueba-b0c89",
  storageBucket: "prueba-b0c89.appspot.com",
  messagingSenderId: "404635311184",
  appId: "1:404635311184:web:3c17d9e75c5d0166fec555"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
