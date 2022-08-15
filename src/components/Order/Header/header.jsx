import React from 'react';
import './header.css';

function Header(){
    return (
        <>
            <div className='header'>
                <ul>
                    <li>
                        <h4>Placing an order</h4>
                        <h5>Aug 15 4.17 PM</h5>
                    </li>
                    <div className='border'></div>
                    <li>
                        <h4>Work in progress</h4>
                        <h5>Aug 17</h5>
                    </li>
                    <div className='border'></div>
                    <li>
                        <h4>Delivery date</h4>
                        <h5>Aug 18 4.17 PM</h5>
                    </li>
                    <div className='border'></div>
                    <li>
                        <h4>Due date</h4>
                        <h5>Aug 20</h5>
                    </li>
                </ul>
                <div className='border1'></div>
            </div>
        </>
    )
}

export default Header;