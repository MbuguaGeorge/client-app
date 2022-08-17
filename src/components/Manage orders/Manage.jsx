import { React, useState } from "react";
// import {Container, Row, Col} from "react-bootstrap";

import SignUp from "../Signup/SignUp";
import Login from "../logIn/Login";

import style from "./manage.module.css";
import { Container } from "react-bootstrap";

export default function Manage() {
    const [selected, setSelected] = useState("signup");
    const showForm = () => {
        if (selected === "login") {
            return <Login />
        }
        else if (selected === "signup") {
            return <SignUp />
        }
    }
    return (
        // <React.Fragment>
        <div>
            <div className={style.container}>
                <h2 className={style.intro}>Welome ljcdifoe cnjjd</h2>
            <div className={style.btns}>
                <button onClick={() => setSelected("signup")} className={style.btn}>New customer</button>
                <button onClick={() => setSelected("login")} className={style.btn}>Returning customer</button>
            </div>
            <div>
                {showForm()}
            </div>
            </div>
            
            {/* </React.Fragment> */}
        </div>
    );
}