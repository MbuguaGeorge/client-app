import React, {useState} from 'react';
import './profile.css';
import Recent from '../Order/recent';
import Finished from '../Order/finished';
import Canceled from '../Order/canceled';

function Profile() {

    const [selected, setSelected] = useState('recentOrders');

    const selectedOption = () => {
        if (selected === 'recentOrders') {
            return <Recent />;
        } else if (selected === 'finishedOrders') {
            return <Finished />;
        } else if (selected === 'canceledOrders') {
            return <Canceled />
        }
    };
 
    return (
        <div className='profile'>
            <div className='nav'>
                <ul>
                    <li>My orders</li>
                    <li>New order</li>
                </ul>
            </div>

            <div className='details'>
                <button onClick={() => setSelected('recentOrders')}>RECENT</button>
                <button onClick={() => setSelected('finishedOrders')}>FINISHED</button>
                <button onClick={() => setSelected('canceledOrders')}>CANCELED</button>
            </div>

            <div className='order'>
                {selectedOption()}
            </div>
        </div>
    )
}

export default Profile;