import React from 'react';
import SideBar from '../Header/sidebar';
import './profile.css';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import box from '../../images/open-box.png'

export default function Prof() {
    return (
        <div className="order-dashboard">
            <SideBar />
            <div className="orders-view">
                <div className="orders-view-title">
                    <h2>My orders</h2>
                    <Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />}>Place order</Button>
                </div>
                <div className="order-status">
                    <ul>
                        <li>Active</li>
                        <li>Revised</li>
                        <li>Canceled</li>
                        <li>Finished</li>
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