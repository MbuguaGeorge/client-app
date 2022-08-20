import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import MyFormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import style from "./signup.module.css";

export default function SignUp() {

    const [profile, setProfile] = useState({
        email: '',
        password: '',
        name: '',
        phone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('http://127.0.0.1:8000/profile/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(profile)
        }).then(
            data => {
                console.log(data);
            }
        ).then(
            () => setRedirect(true)
        ).catch(error => console.log(error))
    }

    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();

    if (redirect) {
        return navigate('/verify', {replace: true})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className={style.registerForm}>
                    <h2 className={style.mb5}>Sign Up</h2>
                    <h4>Please fill in this form to create an account</h4>
                    <hr />

                    <TextField id="standard-basi" label="Email" type="email" variant="standard" className={style.input1}   required 
                        value={profile.email}
                        onChange={e => setProfile(profile => ({
                            ...profile, email: e.target.value
                        }))}
                    />
                    <TextField id="standard-basc" label="Password" type="password" variant="standard" className={style.input} required
                        value={profile.password}
                        onChange={e => setProfile(profile => ({
                            ...profile, password: e.target.value
                        }))}
                    />
                    <TextField id="standard-baic" label="Name(optional)" type="text" variant="standard" className={style.input} required
                        value={profile.name}
                        onChange={e => setProfile(profile => ({
                            ...profile, name: e.target.value
                        }))}
                    />
                    <TextField id="standard-bsic" label="Phone(optional)" type="text" variant="standard" className={style.input} required
                        value={profile.phone}
                        onChange={e => setProfile(profile => ({
                            ...profile, phone: e.target.value
                        }))}
                    />

                    <RadioGroup name="use-radio-group" defaultValue="first" className={style.radio}>
                        <MyFormControlLabel value="first" label="I agree to receive discount coupons, exclusive offers, and the latest news by email, SMS, phone, and other electronic means" control={<Radio />} />
                        <MyFormControlLabel value="second" label="I agree to the Terms & Conditions  and Privacy Policy" control={<Radio />} className={style.radio2} />
                    </RadioGroup>
                    <button type="submit" className={style.signupbtn}>Create account $ Sign in</button>

                </div>
            </form>
            </div>
    );
}