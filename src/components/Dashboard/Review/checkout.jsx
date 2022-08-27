import React from 'react';
import './review.css';
import {Button} from '@mui/material';
import {Lock} from '@mui/icons-material';

function Checkout() {
    return (
        <div className='container1'>
            <div className='desc'>
                <h1>Origin</h1>
                <h5>HighSchool</h5>
                <h5>Discussion Essay</h5>
                <h5>Psychology</h5>
            </div>
            <div className='pricing'>
                <h5>1 page x $78.00 <span>$78.00</span></h5>
                <h5>1 slide x $19.50 <span>$19.50</span></h5>
                <h5>1 chart x $19.50 <span>$19.50</span></h5>
                <h5>Writer preferences <span>$29.25</span></h5>
            </div>
            <div className='total-price'>
                <h3>Total price</h3>
                <h4>$146.25</h4>
            </div>
            <div className='checkout'>
            <Button startIcon={<Lock />} variant='contained' size='small'>Safe checkout</Button>
            </div>
        </div>
    )
}

export default Checkout;