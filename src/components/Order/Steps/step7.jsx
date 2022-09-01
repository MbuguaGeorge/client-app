import React, {useState} from 'react';
import './steps.css';
import {ArrowForward, ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import Step6 from './step6';
import Summary from './summary';

function Step7(){

    const [expert, setExpert] = useState(false);
    const [samples, setSamples] = useState(false);
    const [explanation, setExplanation] = useState(false);

    const [upgrade, setUpgrade] = useState('');

    const handleChange1 = () => {
        setExpert(!expert)
        setSamples(false)
        setExplanation(false)
        setUpgrade('Advanced Writer')
    };

    const handleChange2 = () => {
        setExpert(false)
        setSamples(!samples)
        setExplanation(false)
        setUpgrade('Writers Samples')
    };

    const handleChange3 = () => {
        setExpert(false)
        setSamples(false)
        setExplanation(!explanation)
        setUpgrade('Explanations & Comments')
    };

    const [next, setNext] = useState(false);
    const [back, setBack] = useState(false);
    const [cur, setCur] = useState(true);
    setCur(true)

    const handleBack = () => {
        setBack(!back)
    };

    const handleSubmit = () => {
        localStorage.setItem('STEP7', upgrade)
        setNext(!next)
    };

    let display;

    if (next === true) {
        display = (
            <Summary />
        )
    } else if (back === true) {
        display = (
            <Step6 />
        )
    } else if (cur === true) {
        display = (
            <div className='step1'>
                <div className='det'>
                <div className='details'>
                    <p>STEP 7/7</p>
                    <h1>Upgrades</h1>
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
                            <label for='academics' className='topic'>Advanced writer</label>
                            <label for='academics' className='description'>Expert writer in the chosen field</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='programming'
                                id='programming'
                                onChange={handleChange2}
                            />
                            <label for='programming' className='topic'>Writer's samples</label>
                            <label for='programming' className='description'>3 samples of works previously completed by your writer</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='calculations'
                                id='calculations'
                                onChange={handleChange3}
                            />
                            <label for='calculations' className='topic'>Explanations and comments</label>
                            <label for='calculations' className='description'>Detailed comments on the key writing aspects of your paper</label>
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

export default Step7;