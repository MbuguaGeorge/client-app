import React from "react";
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import MyFormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import style from "./signup.module.css";


export default function SignUp() {
    return (
        <React.Fragment>
            <form>
                <div className={style.registerForm}>
                    <h2 className={style.mb5}>Sign Up</h2>
                    <h4>Please fill in this form to create an account</h4>
                    <hr />

                    <TextField id="standard-basic" label="Email" type="email" variant="standard" className={style.input1} />
                    <TextField id="standard-basic" label="Password" type="password" variant="standard" className={style.input} />
                    <TextField id="standard-basic" label="Name(optional)" type="text" variant="standard" className={style.input} />
                    <TextField id="standard-basic" label="Phone(optional)" type="text" variant="standard" className={style.input} />

                    <RadioGroup name="use-radio-group" defaultValue="first" className={style.radio}>
                        <MyFormControlLabel value="first" label="I agree to receive discount coupons, exclusive offers, and the latest news by email, SMS, phone, and other electronic means" control={<Radio />} />
                        <MyFormControlLabel value="second" label="I agree to the Terms & Conditions  and Privacy Policy" control={<Radio />} className={style.radio2} />
                    </RadioGroup>
                    <button type="submit" className={style.signupbtn}>Create account $ Sign in</button>

                </div>
            </form>
        </React.Fragment>
    );
}