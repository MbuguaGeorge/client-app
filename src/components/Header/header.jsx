import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

function Header(){
    return (
        <div>
            <Link to='/order'><Button variant="contained">Order now</Button></Link>
        </div>
    )
}

export default Header;