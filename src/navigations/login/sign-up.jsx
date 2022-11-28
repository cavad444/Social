import { Link } from "react-router-dom";
function SignUp(){
    return(
<div className="login-div">
        <h1 className='login-login'>Register</h1>
        <form align="center" className="login-form">
            <span className='email-text'>Your email or username</span> 
            <input placeholder='Enter your username' className='login-input login-username' type="text" />
            <span className='password-text'>Your password</span>
            <input placeholder='Enter 6 caracter or more' className='login-input login-password' type="password" />
            <span className='password-text'>Repeat password</span>
            <input placeholder='Enter your password again' className='login-input login-password' type="password" />
            <input value='Login' className='login-button' type="submit" />
        </form>
        <p className='create-an-account'>Already have an account?<Link className='sign-up-plz' to='/login'>Sign In</Link></p>
        
    </div>
    );
}
export default SignUp;