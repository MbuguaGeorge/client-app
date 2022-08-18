import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";

export default function Navbar() {
    return (
       
      <div>
        <nav className='nav'>
            <div>Logo</div>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to = "/services">Our services</Link></li> 
                <li><Link to = "/pricing">Pricing</Link></li> 
                <li><Link to = "/manage">Manage orders</Link></li> 
                <li><Link to = "/order"><button className='orderbtn'>Order now</button></Link></li>  
            </ul>
        </nav>
      </div>
       
    );
}