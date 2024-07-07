
import './SignUp.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
const SignUp = () =>{
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    return(
        <div className="SignUp">
            <h1>Create Account</h1>
            <h3>SignUp</h3>
            <form>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
                <input type='text' placeholder='Email Address'/>
                <input type='text' placeholder='Accadmy Name'/>
                <div className="password-container">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder='Password'
                    />
                    <FontAwesomeIcon
                        icon={passwordVisible ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        className="password-toggle-icon"
                    />
                </div>
                <div className="password-container">
                    <input
                        type={confirmPasswordVisible ? 'text' : 'password'}
                        placeholder='Confirm Password'
                    />
                    <FontAwesomeIcon
                        icon={confirmPasswordVisible ? faEyeSlash : faEye}
                        onClick={toggleConfirmPasswordVisibility}
                        className="password-toggle-icon"
                    />
                </div>
                <button>Create Account</button>
            </form>
            <p>Already have an account? <a href="/">Sign In</a></p>
        </div>
    )
}
export default SignUp;