import React, {useState} from 'react';
import {ArrowForward, ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import './steps.css';
import Step1 from './step1';
import Step3 from './step3';

function Step2(){

    const [back, setBack] = useState(false);
    const [next, setNext] = useState(false);
    const [cur, setCur] = useState(true);

    const [level1, setLevel1] = useState(false);
    const [level2, setLevel2] = useState(false);
    const [level3, setLevel3] = useState(false);
    const [level4, setLevel4] = useState(false);
    const [level5, setLevel5] = useState(false);
    setCur(true)

    const [education, setEducation] = useState('')

    const handleChange1 = () => {
        setLevel1(!level1)
        setLevel2(false)
        setLevel3(false)
        setLevel4(false)
        setLevel5(false)
        setEducation('High School')
    };

    const handleChange2 = () => {
        setLevel1(false)
        setLevel2(!level2)
        setLevel3(false)
        setLevel4(false)
        setLevel5(false)
        setEducation('Undergraduate(1-2)')
    };

    const handleChange3 = () => {
        setLevel1(false)
        setLevel2(false)
        setLevel3(!level3)
        setLevel4(false)
        setLevel5(false)
        setEducation('Undergraduate(3-4)')
    };

    const handleChange4 = () => {
        setLevel1(false)
        setLevel2(false)
        setLevel3(false)
        setLevel4(!level4)
        setLevel5(false)
        setEducation('Graduate')
    };

    const handleChange5 = () => {
        setLevel1(false)
        setLevel2(false)
        setLevel3(false)
        setLevel4(false)
        setLevel5(!level5)
        setEducation('PhD Student')
    };

    const handleSubmit = () => {
        localStorage.setItem('STEP2', education)
        setNext(!next)
    };

    const handleBack = () => {
        setBack(!back)
    };

    let display;

    if (back === true) {
        display = (
            <Step1 />
        )
    } else if (next === true) {
        display = (
            <Step3 />
        )
    } else if (cur === true) {
        display = (
            <div className='step1'>
                <div className='det'>
                    <div className='details'>
                        <p>STEP 2/7</p>
                        <h1>Which year are you in?</h1>
                    </div>
                    <Button startIcon={<ArrowBack />} variant='contained' size='small' onClick={handleBack}>Back</Button>
                </div>
                <div className='form'>
                    <h2>Choose what best describes your education level</h2>
                    <div className='radio'>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='academics'
                                id='academics'
                                onChange={handleChange1}
                            />
                            <label for='academics' className='topic'>Senior in high school</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='programming'
                                id='programming'
                                onChange={handleChange2}
                            />
                            <label for='programming' className='topic'>Undergraduate student (years 1-2)</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='calculations'
                                id='calculations'
                                onChange={handleChange3}
                            />
                            <label for='calculations' className='topic'>Undergraduate student (years 3-4)</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='calculations'
                                id='calculations'
                                onChange={handleChange4}
                            />
                            <label for='calculations' className='topic'>Graduate student</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='calculations'
                                id='calculations'
                                onChange={handleChange5}
                            />
                            <label for='calculations' className='topic'>PhD student</label>
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

export default Step2;