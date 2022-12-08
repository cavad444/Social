import { Link, useNavigate } from 'react-router-dom';
import { useContext,useState } from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../firebase/firebase-config';
import './login.css'
const defaultFormFields = {
    email:'',
    password:'',
};
function LoginComponent(){
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    function resetFormFields(){
        setFormFields(defaultFormFields);
    }

    function handleChange(event){
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value});
        }
        const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        try{
           const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
            navigate('/');
        }catch(err){
            switch(err.code){
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('No user found with this email');
                    break;
                default:
                    console.log(err);
            }

        }
         }
    return(
    <div className="login-div">
        <h1 className='login-login'>Login</h1>
        <form onSubmit={handleSubmit} align="center" className="login-form">
            <span className='email-text'>Your email </span> 
            <input required value={email} onChange={handleChange} name="email" placeholder='Enter your email' className='login-input login-username' type="email" />
            <span className='email-text'>Your email </span> 
            <input required value={password} onChange={handleChange} name="password"  placeholder='Enter 6 caracter or more' className='login-input login-password' type="password" />
            <button className="login-button" type="submit">Log in</button>
        </form>
        <p className='create-an-account'>Don`t have an account?<Link className='sign-up-plz' to='/register'>Sign Up</Link></p>
        
    </div>
    );
}
export default LoginComponent;