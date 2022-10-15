import React from 'react';
import './settings.css';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings-page">

                <div className="settings-title">
                    <h2>Settings</h2>
                </div>

                <div className="settings-options">
                    <ul>
                        <li>
                            <ManageAccountsOutlinedIcon style={{fontSize: '20px'}}/>
                            <h5>General</h5>
                        </li>
                        <li>
                            <LockOpenOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Sign-in & security</h5>
                        </li>
                        <li>
                            <NotificationsOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Notifications</h5>
                        </li>
                    </ul>
                </div>

                <div className="account-settings">
                    <h3>Account</h3>
                    <form>
                        <div className="name">
                            <div className="first-name">
                                <label>First name:</label>
                                <input type='text' required 
                                    placeholder='First name'
                                />
                            </div>
                            <div className="last-name">
                                <label>Last name:</label>
                                <input type='text' required 
                                    placeholder='Last name'
                                />
                            </div>
                        </div>
                        <div className="save-btn">
                            <input type='submit' value='Save' />
                        </div>
                    </form>
                </div>

                <div className="email-setting">
                    <h3>Email</h3>
                    <div className="view-emails">
                        <h5>mbuguag026@gmail.com</h5>
                        <h4>Verified</h4>
                        <button>Change</button>
                    </div>
                </div>

                <div className="phone-setting">
                    <div className="add-phone">
                        <h3>Phone number</h3>
                        <button>Add phone number</button>
                    </div>

                    <div className="no-phone">
                        <h4>You have no Phone Number associated with your account</h4>
                        <p>Add a phone number to help keep your account secure.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}