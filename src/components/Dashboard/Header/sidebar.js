import React from 'react';
import './header.css';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';

export default function SideBar() {
    return (
        <div className='sidebar'>

            <div className="sidebar-top">
                <h1>Elency.</h1>
                <Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '180px'}} >Place order</Button>
            </div>

            <div className="sidebar-mid">
                <ul>
                    <li>
                        <AccountBoxOutlinedIcon style={{fontSize: '20px'}} />
                        <h5>123422 <span style={{paddingLeft: '40px'}}>&gt;</span></h5>
                    </li>
                    <li>
                        <AccountBalanceWalletOutlinedIcon style={{fontSize: '20px'}} />
                        <h5>Balance <span>$0.00</span></h5>
                    </li>
                    <li>
                        <NotificationsOutlinedIcon style={{fontSize: '20px'}} />
                        <h5>Notifications</h5>
                    </li>
                </ul>
            </div>

            <div className="sidebar-bottom">
                <ul>
                    <li>
                        <CardGiftcardOutlinedIcon style={{fontSize: '20px'}} />
                        <h5>My orders <span>9</span></h5>
                    </li>
                    <li>
                        <ChatOutlinedIcon style={{fontSize: '20px'}} />
                        <h5>Chats</h5>
                    </li>
                    <li>
                        <SettingsOutlinedIcon style={{fontSize: '20px'}} />
                        <h5>Settings</h5>
                    </li>
                    <li>
                        <CreditCardIcon style={{fontSize: '20px'}} />
                        <h5>Finance</h5>
                    </li>
                </ul>
            </div>

        </div>
    )
}