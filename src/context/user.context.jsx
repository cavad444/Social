import {createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChangedListener, createUserDocumentFromAuth, signOutUser } from "../firebase/firebase-config";

export const UserContext = createContext({

    currentUser:null,
    setCurrentUser:()=>null,
});
function UserProvider({children}){
    const [currentUser,setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                createUserDocumentFromAuth(user);
                console.log()
            }
            setCurrentUser(user);            
        
        });
        return unsubscribe;
    },[]);

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
export default UserProvider;
