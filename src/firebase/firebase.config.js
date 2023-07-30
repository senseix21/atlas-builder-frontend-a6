// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcPe2lTFEvNhCmQFPyz5jRnU4kFZnS0mw",
    authDomain: "atlas-builder-51dbb.firebaseapp.com",
    projectId: "atlas-builder-51dbb",
    storageBucket: "atlas-builder-51dbb.appspot.com",
    messagingSenderId: "1048592050020",
    appId: "1:1048592050020:web:17c13e603074f380d9fc71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;