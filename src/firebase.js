import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDUhOaNgpjg9xPibWpsSstdcgSf5MfiMk",
    authDomain: "chatapp-9be22.firebaseapp.com",
    projectId: "chatapp-9be22",
    storageBucket: "chatapp-9be22.appspot.com",
    messagingSenderId: "723094373201",
    appId: "1:723094373201:web:3b2c01366706b33f0f0970"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();