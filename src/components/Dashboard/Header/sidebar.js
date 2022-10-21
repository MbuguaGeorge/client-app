import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
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
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Prof from '../Profile/prof';
import Settings from '../Settings/settings';

export default function SideBar() {

    const [order, setOrder] = useState(true);
    const [setting, setSetting] = useState(false);
    const [profile, setProfile] = useState(false);

    const [redirect, setRedirect] = useState(false);

    // handle slide nav
    const [isExpanded, setIsExpanded] = useState(false);

    console.log(profile)

    // profile modal
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

    const handleProfile = () => {
        setProfile(true)
        setOrder(false)
        setSetting(false)
    };

    const handleOrder = () => {
        setOrder(true)
        setSetting(false)
    };

    const handleSetting = () => {
        setOrder(false)
        setSetting(true)
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setRedirect(true)
    };

    let display, orderActiveOptionStyle, settingActiveOptionStyle;
    let profileModal;
    let navigate = useNavigate();

    if (redirect){
        return navigate('/', {replace: true})
    };

    if (open === true){
        profileModal = (
            <div className="my-profile">
                    <ul>
                        <li onClick={handleProfile}>
                            <PersonOutlineOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>My Profile</h5>
                        </li>
                        <li onClick={handleLogout}>
                            <LogoutOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Logout</h5>
                        </li>
                    </ul>
            </div>
        )
    };

    if (order === true){
        display = (
            <Prof />
        );

        orderActiveOptionStyle = {
            backgroundColor: '#292B3A',
            borderRight: '3px solid #3367d6',
            color: '#fff'
        }
    }else if (setting === true){
        display = (
            <Settings />
        )

        settingActiveOptionStyle = {
            backgroundColor: '#292B3A',
            borderRight: '3px solid #3367d6',
            color: '#fff'
        }
    }

    return (
        <div className="user-dashboard">
            <div className="my-profile-container">
                {profileModal}
            </div>
            <div className={isExpanded ? "sidebar expanded" : "sidebar"}>

                <div className="hamburger" onClick={() =>  setIsExpanded(!isExpanded)}>
                    <span className="h-top"></span>
                    <span className="h-mid"></span>
                    <span className="h-bottom"></span>
                </div>

                <div className={isExpanded ? "sidebar-top-slide expanded" : "sidebar-top-slide"}>
                    <button><AddCircleOutlineIcon style={{fontSize: '20px', paddingBottom: '5px'}} /><h5>Place Order</h5></button>
                </div>

                <div className="sidebar-top">
                    <h1>Elency.</h1>
                    <Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '180px'}} >Place order</Button>
                </div>

                <div className={isExpanded ? "sidebar-mid expanded" : "sidebar-mid"}>
                    <ul>
                        <li onClick={handleOpen}>
                            <AccountBoxOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>123422 <span style={{paddingLeft: '40px'}}>&gt;</span></h5>
                        </li>
                        <li>
                            <AccountBalanceWalletOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Balance <span style={{paddingLeft: '10px'}}>$0.00</span></h5>
                        </li>
                        <li>
                            <NotificationsOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Notifications</h5>
                        </li>
                    </ul>
                </div>

                <div className={isExpanded ? "sidebar-bottom expanded" : "sidebar-bottom"}>
                    <ul>
                        <li onClick={handleOrder} style={orderActiveOptionStyle}>
                            <CardGiftcardOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>My orders <span>9</span></h5>
                        </li>
                        <li>
                            <ChatOutlinedIcon style={{fontSize: '20px'}} />
                            <h5>Chats</h5>
                        </li>
                        <li onClick={handleSetting} style={settingActiveOptionStyle}>
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

            <div className="user-option-dashboard">
                {display}
            </div>

        </div>
    )
}