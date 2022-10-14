import React from 'react';
import '../logIn/login.css';
import {Link} from 'react-router-dom';

export default function Register() {
    return (
        <div className='login__container'>
            <div className="login-form">
                <form>
                    <h2>Register an account</h2>
                    <input type='email' required 
                        placeholder='Email'
                    />
                    <input type='password' required 
                        placeholder='Password'
                    />
                    <div className="forgot-password" style={{display: 'block'}}>
                        <div className="check-btn" style={{display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
                            <input type='checkbox' />
                            <label>Remember me</label>
                        </div>
                        <div className="check-btn" style={{display: 'flex', alignItems: 'center'}}>
                            <input type='checkbox' />
                            <label>Yes! Send me news, tips and more</label>
                        </div>
                    </div>
                    <input type='submit' value='Create my account' />
                    <div className='line1'>
                        <div className='line2'></div>
                        <h5>OR</h5>
                        <div className='line3'></div>
                    </div>

                    <div className="google-btn">
                        <button className="google-button">
                        <div className="google-icon-wrapper">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">
                            <g>
                                <path fill="#EA4335"
                                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                                </path>
                                <path fill="#4285F4"
                                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                                </path>
                                <path fill="#FBBC05"
                                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                                </path>
                                <path fill="#34A853"
                                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                                </path>
                                <path fill="none" d="M0 0h48v48H0z"></path>
                            </g>
                            </svg>
                        </div>
                            <p className="google-button-text">Sign up with Google</p>
                        </button>
                    </div>
                    <h4>By creating an account, you agree to the <br/> <span>Terms and Conditions, Privacy Policy</span> and <span>Refund Policy</span></h4>

                    <h3>Already have an account? <Link to="/log"><span>Login</span></Link></h3>

                </form>
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