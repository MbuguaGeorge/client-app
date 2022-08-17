import React from 'react';
import './order.css';

function Canceled() {
    return (
        <div className='recent'>
            <div className='recent-details'>
                <h3>History / See paper instructions</h3>
                <p>#123456 / 2 pages / Undergraduate (yrs, 3-4)</p>
                <p>Canceled: <span>Aug 18, 2022 at 8.25 AM</span></p>
                <div className='verify'>
                    <button>Messages</button>
                    <button>Files</button>
                </div>
            </div>
            
            <div className='recent-progress'>
                <h3>Canceled</h3>
                <p>Your order is has been canceled. If you want us to proceed working on it, please, contact the Support Team.</p>
                <div className='payment'>
                    <button>Re-order</button>
                    <h2>$64.00</h2>
                </div>
            </div>
        </div>
    )
}

export default Canceled;