import React, {useState} from 'react';
import './profile.css';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import box from '../../images/open-box.png'

export default function Prof() {

    const [selected, setSelected] = useState('Active');

    let activeStyle, revisedStyle, canceledStyle, finishedStyle;

    if(selected === 'Active'){
        activeStyle = {
            borderBottom: '3px solid #3367d6'
        }
    }else if (selected === 'Revised'){
        revisedStyle = {
            borderBottom: '3px solid #3367d6'
        }
    }else if (selected === 'Canceled'){
        canceledStyle = {
            borderBottom: '3px solid #3367d6'
        }
    }else if (selected === 'Finished'){
        finishedStyle = {
            borderBottom: '3px solid #3367d6'
        }
    }

    return (
        <div className="order-dashboard">
            <div className="orders-view">
                <div className="orders-view-title">
                    <h2>My orders</h2>
                    <Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />}>Place order</Button>
                </div>
                <div className="order-status">
                    <ul>
                        <li onClick={() => setSelected('Active')} style={activeStyle}>Active</li>
                        <li onClick={() => setSelected('Revised')} style={revisedStyle}>Revised</li>
                        <li onClick={() => setSelected('Canceled')} style={canceledStyle}>Canceled</li>
                        <li onClick={() => setSelected('Finished')} style={finishedStyle}>Finished</li>
                    </ul>
                </div>
                <div className="active-order">
                    <img src={box} alt="open-box" />
                    <h3>You have no active orders</h3>
                    <Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />}>Place order</Button>
                </div>
            </div>
        </div>
    )
}