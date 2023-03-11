import {auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth' 
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";
export const Login = () => {
    const navigate = useNavigate();

const signInwithGoogle = async () =>{
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate('/');

};


    return (
    <div className='login-container'>
        <p className='login-text'> Sign in with Google to continue </p>
        <button className="login-button" onClick={signInwithGoogle}> Sign in with Google </button>
    </div>
    );
}; 