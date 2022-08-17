import React from "react";
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import MyFormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import style from "./login.module.css";

export default function Login() {
    return(
        <React.Fragment>
        <form>
            <div className={style.loginForm}>
                <h2 className={style.mb5}>Login</h2>
                <h4>Hey, welcome back.</h4>
                <hr />

                <TextField id="standard-basic" label="Email" type="email" variant="standard" className={style.input1} />
                <TextField id="standard-basic" label="Password" type="password" variant="standard" className={style.input} />
        
              <p>Forgot password?</p>

                <button type="submit" className={style.loginbtn}>Login</button>

            </div>
        </form>
    </React.Fragment>
    );
}