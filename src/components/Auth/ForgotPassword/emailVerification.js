import React from 'react';
import '../logIn/login.css';

export default function EmailVerification(){
    return(
        <div className='login__container'>
            <div className="verification-content">
                <h3>Check your Email</h3>
                <h5>An email has been sent to you with further instructions <br/> to change your password.</h5>
            </div>

            <div className='login-hero'>
                <div className="login-hero-content">
                    <div className='logo'>
                        <h1>ELENCY.</h1>
                    </div>

                    <div className='content-container'>
                        <h4>WRITING SERVICE AT YOUR CONVENIENCE</h4>
                        <h2>Top Essay Writing Service <br/> with Professional Essay Writers</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}