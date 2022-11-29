import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import Salam from './salam';
import './login.css'
function LoginComponent(){
    const {userLoggedIn,users,logUserIn,usernameValue,passwordValue,changeUsernameValue,changePasswordValue,currentUser} = useContext(UserContext);
    // const userPassword = document.querySelector('.login-username').value;
    // console.log(userPassword);
    return(
    <div className="login-div">
        <h1 className='login-login'>Login</h1>
        <form onSubmit={e=>e.preventDefault()} align="center" className="login-form">
            <span className='email-text'>Your email or username</span> 
            <input required onChange={(e)=>changeUsernameValue(e)} value={usernameValue} placeholder='Enter your username' className='login-input login-username' type="text" />
            <span className='password-text'>Your password</span>
            <input required onChange={(e)=>changePasswordValue(e)} value={passwordValue} placeholder='Enter your password' className='login-input login-password' type="password" />
            <input onClick={()=>logUserIn(passwordValue,usernameValue)} value='Login' className='login-button' type="submit" />
            {userLoggedIn && currentUser}
        </form>
        <p className='create-an-account'>Don`t have an account?<Link className='sign-up-plz' to='/register'>Sign Up</Link></p>
        
    </div>
    );
}
export default LoginComponent;