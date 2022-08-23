import React, {useState} from 'react';
import './steps.css';
import {ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import Step7 from './step7';

function Summary({step1}){

    const [back, setBack] = useState(false);
    const [cur] = useState(true);

    const handleBack = () => {
        setBack(!back)
    };

    let display;

    if (back === true) {
        display = (
            <Step7 />
        )
    } else if (cur === true) {
        display = (
            <div className='step1'>
                <div className='details'>
                    <div className='summary'>
                        <div className='summary1'>
                            <p>{step1}</p>
                            <p>Undergraduate student (years 3-4)</p>
                        </div>
                        <div className='summary2'>
                            <p>Speech</p>
                            <p>History</p>
                            <p><span>Delivery date: </span>Aug 25, 10.31 PM</p>
                        </div>
                        <div className='page-count'>
                            <div className='count'>
                                <p style={{marginRight: '20px'}}>2 pages x $21.00</p>
                                <button>-</button>
                                <button>+</button>
                            </div>
                            <div className='price'>
                                <p>$42.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Button startIcon={<ArrowBack />} variant='contained' size='small' onClick={handleBack}>Back</Button>
            </div>
        )
    }

    return (
        <>
            {display}
        </>
    )
}

export default Summary;