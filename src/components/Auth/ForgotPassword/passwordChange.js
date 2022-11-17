import React, {useState, useEffect} from 'react';
import '../logIn/login.css';

export default function PasswordChange(){

    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const url = window.location.pathname
        const field = url.split('/')
        const token1 = field[2]
        setToken(token1)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://127.0.0.1:8000/profile/reset_confirm", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'token': token,
                'password': password
            })
        }).then(
            res => console.log(res)
        ).catch(err => console.log(err))
    };

    return(
        <div className='login__container'>
            <div className="verification-content">
                <h4>Password Change</h4>
                <form onSubmit={handleSubmit}>
                    <input type='password' required
                        placeholder='New Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input type='password' required
                        placeholder='Confirm New Password'
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
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