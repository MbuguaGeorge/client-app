import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
import Head from '../Dashboard/Header/Header';


export default function Navbar() {

  let token = localStorage.getItem('token');
  let manage;
  if (token){
    manage = (
      <Head style={{display: 'none'}}/>
    )
  } else{
    manage = (
      <li><Link to = "/manage">Manage orders</Link></li>
    )
  }

    return (
      <div>
        <nav className='nav'>
            <div>Logo</div>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to = "/services">Our services</Link></li>
                {manage} 
                <li><Link to = "/review"><button className='orderbtn'>Order now</button></Link></li>  
            </ul>
        </nav>
      </div>
       
    );
}