import React, {useState} from 'react';
import './profile.css';
import Recent from '../Order/recent';
import Finished from '../Order/finished';
import Canceled from '../Order/canceled';

function Profile() {

    const [selected, setSelected] = useState('recentOrders');

    let recentStyle;
    let cancelStyle;
    let finishStyle;

    const selectedOption = () => {
        if (selected === 'recentOrders') {
            return <Recent />;
        } else if (selected === 'finishedOrders') {
            return <Finished />;
        } else if (selected === 'canceledOrders') {
            return <Canceled />
        }
    };

    if (selected === 'recentOrders'){
        recentStyle = {
            color: 'skyblue',
            borderBottom: '2px solid skyblue',
            transition: 'all .2s'
        }
    } else if (selected === 'finishedOrders') {
        finishStyle = {
            color: 'skyblue',
            borderBottom: '2px solid skyblue',
            transition: 'all .2s'
        }
    } else if (selected === 'canceledOrders') {
        cancelStyle = {
            color: 'skyblue',
            borderBottom: '2px solid skyblue',
            transition: 'all .2s'
        }
    }
 
    return (
        <div className='profile'>
            <div className='nav'>
                <ul>
                    <li>My orders</li>
                    <li>New order</li>
                </ul>
            </div>

            <div className='details'>
                <button onClick={() => setSelected('recentOrders')} style={recentStyle}>RECENT</button>
                <button onClick={() => setSelected('finishedOrders')} style={finishStyle}>FINISHED</button>
                <button onClick={() => setSelected('canceledOrders')} style={cancelStyle}>CANCELED</button>
            </div>

            <div className='order'>
                {selectedOption()}
            </div>
        </div>
    )
}

export default Profile;