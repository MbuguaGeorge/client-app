import React, {useState} from 'react';
import './steps.css';
import {ArrowForward, ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import Step5 from './step5';
import Step7 from './step7';

function Step6(){

    const [basic, setBasic] = useState(false);
    const [standard, setStandard] = useState(false);
    const [advanced, setAdvanced] = useState(false);

    const [paperlevel, setPaperlevel] = useState('')

    const handleChange1 = () => {
        setBasic(!basic)
        setStandard(false)
        setAdvanced(false)
        setPaperlevel('Basic')
    };

    const handleChange2 = () => {
        setBasic(false)
        setStandard(!standard)
        setAdvanced(false)
        setPaperlevel('Standard')
    };

    const handleChange3 = () => {
        setBasic(false)
        setStandard(false)
        setAdvanced(!advanced)
        setPaperlevel('Advanced')
    };

    const [next, setNext] = useState(false);
    const [back, setBack] = useState(false);
    const [cur, setCur] = useState(true);
    setCur(true)

    const handleBack = () => {
        setBack(!back)
    };

    const handleSubmit = () => {
        localStorage.setItem('STEP6', paperlevel)
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
                            onChange={handleChange1}
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
                            onChange={handleChange2}
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
                            onChange={handleChange3}
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