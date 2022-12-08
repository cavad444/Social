import { initializeApp } from "firebase/app";
import {getFirestore,doc,getDoc,setDoc} from '@firebase/firestore';
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';

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
export const auth = getAuth(app);

export const db = getFirestore(app);

export const createAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword = async (email,password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
}

export const signOutUser = async () => await signOut(auth);

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db,'users',userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    console.log(userSnapshot);
    const {displayName,email} = userAuth;
    const createdAt = new Date();
      
  
  try{
    await setDoc(userDocRef,{
      displayName,
      email,
      createdAt,
      ...additionalInformation
    });
  }catch(err){
    console.log("error creating the user", err)
  }}
  
}

export const onAuthStateChangedListener = (callback) =>{
  
   onAuthStateChanged(auth,callback);
}