import React, {useState} from 'react';
import './pages.css';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Home(){

    const [open, setOpen] = useState(false);

    const handleOpenOptions = () => {
        setOpen(!open)
    };

    let displayOptions, displayIcon;

    if(open === true){
        displayOptions = (
            <div className="services-container">
                <div className="services-options">
                    <ul>
                        <li>Academic Writing</li>
                        <li>Programming Assignment</li>
                        <li>Calculations Assignment</li>
                    </ul>
                </div>
            </div>
        )
        displayIcon = (
            <ExpandLessIcon />
        )
    } else if(open === false) {
        displayIcon = (
            <ExpandMoreIcon />
        )
    }

    return (
        <div className='home-container'>
            <div className="navigation">

                <div className="navlinks">
                    <ul>
                        <li onClick={handleOpenOptions}>Our Services <span>{displayIcon}</span></li>
                        <li>How to Order</li>
                        <li>Sample Work <ExpandMoreIcon /></li>
                        <li>Blog</li>
                        <li>Latest Reviews</li>
                        <li>Pricing</li>
                    </ul>
                </div>

                {displayOptions}

                <div className="logo">
                    <ul>
                        <li>Elency</li>
                        <Link to="/log" style={{textDecoration: 'none'}}><li><Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />} style={{width: '130px', padding: '8px 0'}} >Order now</Button></li></Link>
                    </ul>
                </div>

                <div className="about">
                    <div className="about-content">
                        <h1>About Us</h1>
                        <h2>The ultimate accolade across all fields.</h2>
                        <p>A platform for professional writing and development called Company Name links skilled experts with anyone who requires a top-notch outcome inside an affordable price range.

                        We have come a long way in our mission to provide economic possibilities so that people might live better lives. As a result, we have evolved into the global work marketplace where companies of all sizes and freelancers from all over the world join together daily to do amazing things. Use this pool of independent talent if you are a client who has come to us to get things done in order to alter your company and build more quickly. If you're a talented independent person who has come here to fulfill your potential, know that you are an important and useful member of someone's team.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}