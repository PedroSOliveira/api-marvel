import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDQIVW90Gy2qoIDKp2B8CMb2VtLzFCMdMQ",
    authDomain: "app-marvel-e7613.firebaseapp.com",
    projectId: "app-marvel-e7613",
    storageBucket: "app-marvel-e7613.appspot.com",
    messagingSenderId: "132798906191",
    appId: "1:132798906191:web:c2aef00d786721e0bb4f3a"
};

const app = initializeApp(firebaseConfig);

export { app };