import React, {useState} from 'react';
import './steps.css';
import {ArrowForward} from '@mui/icons-material';
import Step2 from './step2';
import {Button} from '@mui/material';

function Step1(){

    const [academics, setAcademics] = useState(false);
    const [programming, setProgramming] = useState(false);
    const [calculations, setCalculations] = useState(false);
    const [step2, setStep2] = useState(false);

    const [work, setWork] = useState('');

    const handleChange1 = () => {
        setAcademics(!academics)
        setProgramming(false)
        setCalculations(false)
        setWork('Academics')
    };

    const handleChange2 = () => {
        setProgramming(!programming)
        setAcademics(false)
        setCalculations(false)
        setWork('Programming')

    };

    const handleChange3 = () => {
        setCalculations(!calculations)
        setAcademics(false)
        setProgramming(false)
        setWork('Calculations')
    };

    const handleSubmit = () => {
        localStorage.setItem('STEP1', work)
        setStep2(!step2)
    };

    let display;

    if (step2 === false) {
        display = (
            <div className='step1'>
            <div className='det'>
                <div className='details'>
                    <p>STEP 1/7</p>
                    <h1>What do you need help with?</h1>
                </div>
                </div>
                <div className='form'>
                    <h2>Choose the task you want to delegate</h2>
                    <div className='radio'>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='Academics'
                                id='academics'
                                onChange={handleChange1}
                            />
                            <label for='academics' className='topic'>Academic Writing</label>
                            <label for='academics' className='description'>E.g. essay, research paper, coursework in any subject</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='Programming'
                                id='programming'
                                onChange={handleChange2}
                            />
                            <label for='programming' className='topic'>Programming assignment</label>
                            <label for='programming' className='description'>E.g. programming, database optimisation, modeling</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='Calculations'
                                id='calculations'
                                onChange={handleChange3}
                            />
                            <label for='calculations' className='topic'>Calculations assignment</label>
                            <label for='calculations' className='description'>E.g. math problems, engineering computations, finance balance sheets</label>
                        </div>
                    </div>
                    <Button endIcon={<ArrowForward />} variant='contained' size='small' onClick={handleSubmit}>Next Step</Button>
                </div>
            </div>
        )
    } else if (step2 === true) {
        display = (
            <Step2 />
        )
    };

    return (
        <>
            {display}
        </>
    )
}

export default Step1;