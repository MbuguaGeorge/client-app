import React, {useState} from 'react';
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
import Prof from '../Profile/prof';
import Settings from '../Settings/settings';

export default function SideBar() {

    const [order, setOrder] = useState(true);
    const [setting, setSetting] = useState(false);

    const handleOrder = () => {
        setOrder(true)
        setSetting(false)
    };

    const handleSetting = () => {
        setOrder(false)
        setSetting(!setting)
    };

    let display, orderActiveOptionStyle, settingActiveOptionStyle;

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

            {display}

        </div>
    )
}