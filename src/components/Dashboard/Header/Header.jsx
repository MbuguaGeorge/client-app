import React from "react";
import './header.css';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Head() {
    const [menu, setMenu] = React.useState('');

    const handleChange = (event) => {
        setMenu(event.target.value);
    };
    return (
        <div className='profile-view'>
            <h1 className="logo">Logo</h1>

            <div className="main">
                <FormControl className="form" size='small'>
                    <InputLabel id="demo-simple-select-label">Menu</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={menu}
                        label="Menu"
                        onChange={handleChange}
                        size='small'
                    >
                        <MenuItem value={10} size='small'><div className="icon" style={{fontSize: '1rem'}}><PermIdentityIcon /></div>My Profile</MenuItem>
                        <MenuItem value={20}><div className="icon" style={{fontSize: '1rem'}}><Inventory2Icon /></div>My Orders</MenuItem>
                        <MenuItem value={30} size='small'><div className="icon" style={{fontSize: '1rem'}}><LogoutIcon size='small'/></div>Log out</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div >
    );
}