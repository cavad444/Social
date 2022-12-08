import { Link } from "react-router-dom";
import {useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../firebase/firebase-config";
import { UserContext } from "../../context/user.context";
const defaultFormFields = {
    email:'',
    password:'',
    confirmPassword:'',
    displayName:'',
};

function SignUp(){
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password,confirmPassword,displayName} = formFields;

    function resetFormFields(){
        setFormFields(defaultFormFields);
    }

    function handleChange(event){
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value});
        }

    async function addUsers(e){
        e.preventDefault();
        if(password !== confirmPassword){
            // await setDoc(doc(usersCollectionRef,{username:'salam',password:'salam1234'}));
            alert('Enter passwords same');
            return;
        }
        try{
            const {user} =  await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
            console.log(user);
            console.log(user.displayName);
            console.log(formFields[displayName]);
            resetFormFields();
        }catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert("Cannot create user, email already in use")
            }else{
                console.log(err);
            }
        }
         }
    return(
<div className="login-div">
        <h1 className='login-login'>Register</h1>
        <form onSubmit={addUsers} align="center" className="login-form">
            <span className='email-text'>Your username </span> 
            <input required value={displayName} onChange={handleChange} name="displayName" placeholder='Enter your username' className='login-input login-username' type="text" />
            <span className='email-text'>Your email </span> 
            <input required value={email} onChange={handleChange} name="email" placeholder='Enter your email' className='login-input login-username' type="email" />
            <span className='password-text'>Your password</span>
            <input required value={password} onChange={handleChange} name="password"  placeholder='Enter 6 caracter or more' className='login-input login-password' type="password" />
            <span className='password-text'>Repeat password</span>
            <input required value={confirmPassword} onChange={handleChange} name="confirmPassword" placeholder='Enter your password again' className='login-input login-password' type="password" />
            <button className="login-button" type="submit">Register</button>
        </form>
        <p className='create-an-account'>Already have an account?<Link className='sign-up-plz' to='/login'>Sign In</Link></p>
        
    </div>
    );
}
export default SignUp;
