import React from 'react';
import Header from '../Header/header';
import Step1 from '../Steps/step1';
import './order.css';

function Order(){

    return (
        <>
            <div className='order'>
                <Header />
                <div className='steps'>
                    <Step1 />
                </div>
            </div>
        </>
    )
}

export default Order;