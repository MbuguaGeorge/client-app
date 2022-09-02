import React from "react"
import './header.css';
import {useNavigate} from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function Head({style}) {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

    let token = localStorage.getItem('token');
    let navigate = useNavigate();
    let display;

    if(token){
        display = (
            <div className='profile-view'>
                <h1 className="logo" style={style}>Logo</h1>

                <div className="main">
                <Stack direction="row" spacing={2}>
                    <div>
                        <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        >
                        Dashboard
                        </Button>
                        <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                        >
                        {({ TransitionProps, placement }) => (
                            <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={() => {return navigate('/myprofile', {replace: true})}}>Profile</MenuItem>
                                    <MenuItem onClick={() => {return navigate('/profile', {replace: true})}}>My orders</MenuItem>
                                    <MenuItem onClick={() => {
                                        localStorage.removeItem('token')
                                        return navigate('/', {replace: true})
                                    }}>Logout</MenuItem>
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                            </Grow>
                        )}
                        </Popper>
                    </div>
                </Stack>
                </div>
            </div >
        )
    }

    else{
        display = (
            <Navbar />
        )
    }

    return (
        <>
            {display}
        </>
    );
}