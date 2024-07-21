import './SignIn.css';
import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io5";
import axios from 'axios';

const SignIn = () => {
    const [username, setUsername] = useState(''); // Initialize with an empty string
    const [password, setPassword] = useState(''); // Initialize with an empty string
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:2222/api/auth/signin', {
                username: username,
                password: password
            });
            // Handle the response as needed
            console.log(response.data);
        } catch (error) {
            setUsername('');
            setPassword('');
            setError('Sign in failed. Please check your credentials.');
            console.error('There was an error signing in!', error);
        }
    }
    const clearError = () => {
        setError('');
    }

    return (
        <div className='Signin'>
            <h2>Welcome Back</h2>
            <h3>Sign In</h3>
            <form onSubmit={handleSignIn}>
                <input 
                    type='text' 
                    placeholder='User Name' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} // Add value attribute
                    onClick={clearError}
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} // Add value attribute
                    onClick={clearError}
                 />
                <button type='submit'>Sign In</button>
            </form>
            {error && <p className="error">{error}</p>}
            <p>Create New Account <a href="/SignUp">Sign Up</a></p>
            <div className='icon-container'>
                <FaFacebookF className='icon-button'/>
                <SiGmail className='icon-button'/>
                <IoLogoWhatsapp className='icon-button'/>
            </div>
        </div>
    )
}

export default SignIn;
