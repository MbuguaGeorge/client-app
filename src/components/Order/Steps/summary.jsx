import React from 'react';
import './steps.css';

function Summary(){
    return (
        <>
            <div className='step1'>
                <div className='details'>
                    <p>SUMMARY</p>
                    <h5>Order details</h5>
                    <div className='summary'>
                        <p>Academic writing</p>
                        <p>Undergraduate student (years 3-4)</p>
                        <p>Speech</p>
                        <p>History</p>
                        <p><span>Delivery date: </span>Aug 25, 10.31 PM</p>
                        <div className='page-count'>
                            <div className='count'>
                                <p style={{marginRight: '20px'}}>2 pages x $21.00</p>
                                <button>-</button>
                                <button>+</button>
                            </div>
                            <div className='price'>
                                <p>$42.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary;