import React from 'react';
import './settings.css';
import SideBar from '../Header/sidebar';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

export default function Settings() {
    return (
        <div className="settings">
            <SideBar />
            <div className="settings-page">
                <div className="settings-title">
                    <h2>Settings</h2>
                </div>
                <div className="settings-options">
                    <ul>
                        <li>
                            <h5>General</h5>
                        </li>
                        <li>
                            <LockPersonOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Sign-in & security</h5>
                        </li>
                        <li>
                            <NotificationsOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Notifications</h5>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}