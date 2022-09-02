import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import style from "./login.module.css";
import {useNavigate} from 'react-router-dom';

export default function Login() {

    const [details, setDetails] = useState({
        email: '',
        password: ''
    });

    const [redirect, setRedirect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(details)

        fetch('https://georgeclientapp.herokuapp.com/profile/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(details)
        }).then(
            res => {
                console.log(res)
                res.json().then(data => {
                    if(data.token){
                        localStorage.setItem('token', data.token)
                        setRedirect(!redirect)
                    }
                    if(!data.token){
                        alert('Wrong credentials')
                    }
                })
            }
        ).catch(error => console.log(error))
    };

    const navigate = useNavigate();

    if (redirect) {
        return navigate('/profile', {replace: true})
    }

    return(
       <div>
        <form>
            <div className={style.loginForm}>
                <h2 className={style.mb5}>Login</h2>
                <h4>Hey, welcome back.</h4>
                <hr />

                <TextField id="standard-b2asic" label="Email" type="email" variant="standard" className={style.input1}
                    value={details.email}
                    onChange={e => setDetails(details => ({
                        ...details, email: e.target.value
                    }))}
                 />
                <TextField id="standard-b1asic" label="Password" type="password" variant="standard" className={style.input}
                    value={details.password}
                    onChange={e => setDetails(details => ({
                        ...details, password: e.target.value
                    }))}
                 />
        
              <p>Forgot password?</p>

                <button type="submit" className={style.loginbtn} onClick={handleSubmit}>Login</button>

            </div>
        </form>
        </div>
    );
}