import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_DATABASE_URL,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID
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

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };