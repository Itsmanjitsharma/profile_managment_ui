import './SignUp.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const roles = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' }
];

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [academyName, setAcademyName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState('');
    const [role, setRole] = useState(roles[0].value); // default role

    const navigate = useNavigate(); // Use the navigate hook

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const clearError = () => {
        setError('');
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        const payload = {
            username: firstName, // Using first name for username
            email: email,
            password: password,
            role: [role] // Sending role as an array
        };

        try {
            const response = await axios.post('http://localhost:2222/api/auth/signup', payload);
            setFirstName('');
            setLastName('');
            setConfirmPassword('');
            setAcademyName('');
            setEmail('');
            setPassword('');
            setRole(roles[0].value);
            // Navigate to the SignIn page
            navigate('/');
            // Handle the response as needed
            console.log(response.data);
        } catch (error) {
            setError('Sign up failed. Please try again.');
            console.error('There was an error signing up!', error);
            setFirstName('');
            setLastName('');
            setConfirmPassword('');
            setAcademyName('');
            setEmail('');
            setPassword('');
            setRole(roles[0].value);
        }
    };

    return (
        <div className="SignUp">
            <h1>Create Account</h1>
            <div className='top-header-view'>
                <h3>SignUp</h3>
                <div className="role-container">
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        {roles.map((role) => (
                            <option key={role.value} value={role.value}>
                                {role.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <form onSubmit={handleSignUp}>
                <input
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onClick={clearError}
                />
                <input
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onClick={clearError}
                />
                <input
                    type='text'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onClick={clearError}
                />
                <input
                    type='text'
                    placeholder='Academy Name'
                    value={academyName}
                    onChange={(e) => setAcademyName(e.target.value)}
                    onClick={clearError}
                />
                <div className="password-container">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onClick={clearError}
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onClick={clearError}
                    />
                    <FontAwesomeIcon
                        icon={confirmPasswordVisible ? faEyeSlash : faEye}
                        onClick={toggleConfirmPasswordVisibility}
                        className="password-toggle-icon"
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type='submit'>Create Account</button>
            </form>
            <p>Already have an account? <a href="/">Sign In</a></p>
        </div>
    );
};

export default SignUp;
