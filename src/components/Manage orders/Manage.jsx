import { React, useState } from "react";
import SignUp from "../Auth/Signup/SignUp";
import Login from "../Auth/logIn/Login";
import style from "./manage.module.css";
import Head from '../Navbar/Navbar';

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
        <>
            <Head />
            <div className={style.container}>
                <h2 className={style.intro}>Login to continue</h2>
                <div className={style.btns}>
                    <button onClick={() => setSelected("signup")} className={style.btn}>New customer</button>
                    <button onClick={() => setSelected("login")} className={style.btn}>Returning customer</button>
                </div>
                <div>
                    {showForm()}
                </div>
            </div>
        </>
    );
}