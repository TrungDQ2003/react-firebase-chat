import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchat-c851f.firebaseapp.com",
    projectId: "reactchat-c851f",
    storageBucket: "reactchat-c851f.appspot.com",
    messagingSenderId: "227875118644",
    appId: "1:227875118644:web:bafc3ea9a17d67eaff3461"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()