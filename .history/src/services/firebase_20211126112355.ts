import firebase from "firebase/compat/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "letmeask-babad.appspot.com",
    messagingSenderId: "726189103597",
    appId: "1:726189103597:web:11f00cdf4127e5000c6fe4",
    measurementId: "G-RKYCKP8PNJ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();