import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDchapso4uLhVRzDmo4vOWppi_sGrGZqdg",
    authDomain: "restaurants-2d068.firebaseapp.com",
    projectId: "restaurants-2d068",
    storageBucket: "restaurants-2d068.appspot.com",
    messagingSenderId: "446811150763",
    appId: "1:446811150763:web:7c69efa499c8c9495f9aee"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);