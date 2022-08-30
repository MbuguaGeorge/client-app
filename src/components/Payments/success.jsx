import React from 'react';
import './payment.css';
import {Link} from 'react-router-dom'
import success from '../images/check (1).png';

function Success(){
    return (
        <div className='success'>
            <img src={success} alt='success'/>
            <h1>Yay! Your payment was Successful</h1>
            <Link to='/profile' style={{textDecoration: 'none'}}><button>View Order</button></Link>
        </div>
    )
}

export default Success;