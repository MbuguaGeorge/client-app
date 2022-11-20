import React, {useState} from 'react';
import '../logIn/login.css';
import {useNavigate} from 'react-router-dom';

export default function ForgotPassword(){

    const [email, setEmail] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://georgeclientapp.herokuapp.com/password_reset/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email})
        }).then(
            res => console.log(res)
        ).then(
            setRedirect(!redirect)
        ).catch(err => console.log(err))
    }

    const navigate = useNavigate();

    if (redirect) {
        return navigate('/email-verification', {replace: true})
    }

    return (
        <div className='login__container'>
            <div className="verification-content">
                <h4>Enter your email to change password.</h4>
                <form onSubmit={handleSubmit}>
                    <input type='email' required
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type='submit' 
                        value="Submit"
                    />
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