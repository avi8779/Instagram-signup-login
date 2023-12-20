import React, { useState } from 'react';
import './Logo.css';

function Logo({ src, width, height }) {
    const [isLogin, setIsLogin] = useState(true); // State to track if it's login or signup view

    const handleToggle = () => {
        setIsLogin(prevState => !prevState); // Toggle between login and signup views
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission for login or signup based on isLogin state
        if (isLogin) {
            // Logic for login form submission
            // Implement your login functionality here
        } else {
            // Logic for signup form submission
            // Implement your signup functionality here
        }
    };

    return (
        <div className="main">
            <div className='box'>
                <img src={src} width={width} height={height} alt="Logo"/>
                <form onSubmit={handleSubmit}>
                    { !isLogin && <input type='text' placeholder="Mobile Number or Email" />}
                    { !isLogin && <input type='text' placeholder="Full Name" />}
                    <input type='text' placeholder="Phone number, username, or email" />
                    <input type='password' placeholder="Password" />
                    <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
                </form>
                <p>
                    {isLogin ? 'Don\'t have an account? ' : 'Have an account? '}
                    <span onClick={handleToggle}>{isLogin ? 'Signup' : 'Login'}</span>
                </p>
            </div>
        </div>
    )
}

export default Logo;
