import React from 'react';
import './payment.css';
import {Link} from 'react-router-dom'
import invalid from '../images/remove.png';

function Invalid(){
    return (
        <div className='success'>
            <img src={invalid} alt='success'/>
            <h1>Your payment did not go through!</h1>
            <Link to='/profile' style={{textDecoration: 'none'}}><button>View Order</button></Link>
        </div>
    )
}

export default Invalid;