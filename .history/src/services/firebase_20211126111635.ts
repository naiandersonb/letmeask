import firebase from "firebase/compat/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCrRaRkeHn9oMdfqzpbkVLF_EDjCDlTQWE",
    authDomain: "letmeask-babad.firebaseapp.com",
    databaseURL: "https://letmeask-babad-default-rtdb.firebaseio.com",
    projectId: "letmeask-babad",
    storageBucket: "letmeask-babad.appspot.com",
    messagingSenderId: "726189103597",
    appId: "1:726189103597:web:11f00cdf4127e5000c6fe4",
    measurementId: "G-RKYCKP8PNJ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();