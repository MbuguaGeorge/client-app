import React from 'react';
import './order.css';

function Recent() {
    return (
        <div className='recent'>
            <div className='recent-details'>
                <h3>History / See paper instructions</h3>
                <p>#123456 / 2 pages / Undergraduate (yrs, 3-4)</p>
                <p>Deadline: <span>Aug 18, 2022 at 8.25 AM (If you pay right now)</span></p>
                <div className='verify'>
                    <button>Messages</button>
                    <button>Files</button>
                    <button>Review & Pay</button>
                </div>
            </div>
            
            <div className='recent-progress'>
                <h3>progress</h3>
                <p>Your order is unpaid. Please check your email and follow the tips to complete the payment procedure.</p>
                <div className='payment'>
                    <button>Cancel order</button>
                    <h2>$64.00</h2>
                </div>
            </div>
        </div>
    )
}

export default Recent;