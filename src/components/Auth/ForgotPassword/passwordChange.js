import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '../logIn/login.css';

const initialError = {
    passwordError: null,
    matchError: ''
}

export default function PasswordChange(){

    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [token, setToken] = useState('');

    const [redirect, setRedirect] = useState(false);
    const [validators, setValidators] = useState(initialError);

    useEffect(() => {
        const url = window.location.pathname
        const field = url.split('/')
        const token1 = field[2]
        setToken(token1)
    },[]);

    const handleErrors = () => {

        let matchError = ''

        if(password !== password2){
            matchError = 'Passwords do not match'
        }

        if(matchError){
            setValidators({matchError})
            return false
        }
        return true
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = handleErrors()

        if (isValid){
            fetch("http://127.0.0.1:8000/password_reset/confirm/", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'token': token,
                    'password': password
                })
            }).then(
                res => console.log(res)
            ).then(() => {
                alert('Password Changed Successfully')
                setRedirect(!redirect)
            }).catch(err => console.log('failed' + err))
        }
    };

    const navigate = useNavigate();

    if (redirect) {
        return navigate('/log', {replace: true})
    };

    return(
        <div className='login__container'>
            <div className="verification-content">
                <div className="error-box" style={{display: validators.matchError.length < 1 ? 'none' : 'block'}}>
                    {/* <h3>{validators.passwordError}</h3> */}
                    <h3>{validators.matchError}</h3>
                </div>
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