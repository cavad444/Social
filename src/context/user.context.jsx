import {createContext, useState } from "react";
import USER_DATA from './user-data.json';


export const UserContext = createContext({
    users:[],
    userLoggedIn:false,
    logMessage:'',
    logUserIn:()=>{},
    usernameValue:' ',
    passwordValue:' ',
    changeUsernameValue:()=>{},
    changePasswordValue:()=>{},
    currentUser:'',
});
function UserProvider({children}){
    const [users,setUsers] = useState(USER_DATA);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [logMessage,setLogMessage] = useState('');
    const [usernameValue,setUsernameValue] = useState('');
    const [passwordValue,setPasswordValue] = useState('');
    const [currentUser,setCurrentUser] = useState('');

    function changeUsernameValue(e){
       setUsernameValue(e.target.value);
    };

    function changePasswordValue(e){
       setPasswordValue(e.target.value);
    };

    function logUserIn(passwordValue,usernameValue){
        const existingUser = users.find(
            (user)=>user.user_name === usernameValue && user.password === passwordValue
        ); 
        if(existingUser){
            
            setUserLoggedIn(true);
            alert('logged in');
            setCurrentUser(usernameValue);
        }else{
            alert('cannot logged in');
        }
    }

    const value = {users,userLoggedIn,logUserIn,usernameValue,passwordValue,changeUsernameValue,changePasswordValue,currentUser};

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}
export default UserProvider;
