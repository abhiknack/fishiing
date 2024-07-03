// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxPl3nmlrMcsPLg9dzIGP0y54EFTRKMQc",
    authDomain: "simplefish-375c5.firebaseapp.com",
    projectId: "simplefish-375c5",
    storageBucket: "simplefish-375c5.appspot.com",
    messagingSenderId: "498414190059",
    appId: "1:498414190059:web:47707860f41d270dda6dae",
    measurementId: "G-ZGGJ46TMF6"
};


const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);