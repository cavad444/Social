import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB55NwFtUK0JQzHiqv0t6WjZm37RFhkpgM",
    authDomain: "instagram-db-e7d8a.firebaseapp.com",
    projectId: "instagram-db-e7d8a",
    storageBucket: "instagram-db-e7d8a.appspot.com",
    messagingSenderId: "193457777581",
    appId: "1:193457777581:web:f271792f1b3ef7ad118f24",
    measurementId: "G-JV2ZDSTEBK"
  };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);