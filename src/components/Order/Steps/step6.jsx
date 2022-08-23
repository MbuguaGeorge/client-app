import React, {useState} from 'react';
import './steps.css';
import {ArrowForward, ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import Step5 from './step5';
import Step7 from './step7';

function Step6(){

    const [next, setNext] = useState(false);
    const [back, setBack] = useState(false);
    const [cur, setCur] = useState(true);

    const handleBack = () => {
        setBack(!back)
    };

    const handleSubmit = () => {
        setNext(!next)
    };

    let display;

    if (next === true) {
        display = (
            <Step7 />
        )
    } else if (back === true) {
        display = (
            <Step5 />
        )
    } else if (cur === true) {
        display = (
            <div className='step1'>
            <div className='det'>
                <div className='details'>
                    <p>STEP 6/7</p>
                    <h1>What do you expect?</h1>
                </div>
                <Button startIcon={<ArrowBack />} variant='contained' size='small' onClick={handleBack}>Back</Button>
            </div>
            <div className='form'>
                <h2>Choose the paper level you prefer</h2>
                <div className='radio'>
                    <div className='inputs'>
                        <input 
                            type='radio'
                            name='work'
                            value='academics'
                            id='academics'
                        />
                        <label for='academics' className='topic'>Advanced paper</label>
                        <label for='academics' className='description'>A paper done by the writer with high expertise in the field</label>
                    </div>
                    <div className='inputs'>
                        <input 
                            type='radio'
                            name='work'
                            value='programming'
                            id='programming'
                        />
                        <label for='programming' className='topic'>Standard paper</label>
                        <label for='programming' className='description'>Just a regular paper according to your instructions</label>
                    </div>
                    <div className='inputs'>
                        <input 
                            type='radio'
                            name='work'
                            value='calculations'
                            id='calculations'
                        />
                        <label for='calculations' className='topic'>Basic paper in simple English</label>
                        <label for='calculations' className='description'>Recommended for international students</label>
                    </div>
                </div>
                <Button endIcon={<ArrowForward />} variant='contained' size='small' onClick={handleSubmit}>Next Step</Button>
            </div>
        </div>
        )
    }

    return (
        <>
            {display}
        </>
    )
}

export default Step6;