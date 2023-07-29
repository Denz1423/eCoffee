import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: "ecoffee-7d370",
    storageBucket: "ecoffee-7d370.appspot.com",
    messagingSenderId: "945800647124",
    appId: process.env.REACT_APP_appId,
    measurementId: "G-BSP5XQTGV0"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth();

export {db, auth};



