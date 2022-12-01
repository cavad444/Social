import {createContext, useState } from "react";
import USER_DATA from './user-data.json';
import { useNavigate } from "react-router-dom";
import {db} from '../firebase/firebase-config';
import { addDoc, collection, getDocs } from "firebase/firestore";

// const INITIAL_STATE = {
//     currentUser:'',
//     users:[],
//     userLoggedIn:false,
//     logMessage:'',
//     usernameValue:' ',
//     passwordValue:' ',
// }

// function userReducer(){
//     switch
// }

export const UserContext = createContext({
    users:[],
    userLoggedIn:false,
    logUserIn:()=>{},
    usernameValue:' ',
    passwordValue:' ',
    changeUsernameValue:()=>{},
    changePasswordValue:()=>{},
    currentUser:'',
    getUsers:()=>{},
    addUsers:()=>{},
    changeEnterPasswordAgainValue:()=>{},
});
function UserProvider({children}){
    const [users,setUsers] = useState(USER_DATA);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [usernameValue,setUsernameValue] = useState('');
    const [passwordValue,setPasswordValue] = useState('');
    const [enterPasswordAgainValue,setEnterPasswordAgainValue] = useState('');
    const [currentUser,setCurrentUser] = useState('');
    const usersCollectionRef = collection(db,'users');

    async function getUsers(){
        const data = await getDocs(usersCollectionRef);
        console.log(data);
        setUsers(data.docs.map((doc) => ({...doc.data(),id:doc.id})));   
     }    
     async function addUsers(){
        if(usernameValue === enterPasswordAgainValue){
            await addDoc(usersCollectionRef,{username:usernameValue,password:passwordValue});
        }else{
            alert('Enter passwords same');
        }
      
    }

    function changeUsernameValue(e){
       setUsernameValue(e.target.value);
    };

    function changePasswordValue(e){
       setPasswordValue(e.target.value);
    };
    function changeEnterPasswordAgainValue(e){
        setEnterPasswordAgainValue(e.target.value);
    }
    const navigate = useNavigate();
    function logUserIn(passwordValue,usernameValue){
        // const existingUser = users.find(
        //     (user)=>user.user_name === usernameValue && user.password === passwordValue
        // ); 
        // if(existingUser){
            
        //     setUserLoggedIn(true);
        //     alert('logged in');
        //     setCurrentUser(usernameValue);
        //     navigate('/');
        // }else{
        //     alert('cannot logged in');
        // }
    }

    const value = {users,userLoggedIn,logUserIn,usernameValue,passwordValue,changeUsernameValue,changePasswordValue,currentUser,getUsers,addUsers,changeEnterPasswordAgainValue};

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
export default UserProvider;
