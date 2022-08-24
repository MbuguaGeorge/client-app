import React, {useState} from 'react';      
import './steps.css';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {ArrowForward, ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import Step4 from './step4';
import Step2 from './step2';
import moment from 'moment'

function Step3(){

    const [selectedDate, setSelectedDate] = useState(new Date())

    console.log(selectedDate.toLocaleString())
    let d = selectedDate.setDate(selectedDate.getDate() - 5)
    console.log(moment(d))

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
            <Step4 />
        )
    } else if (back === true) {
        display = (
            <Step2 />
        )
    } else if (cur === true) {
        display = (
            <div className='step1'>
                <div className='det'>
                    <div className='details'>
                        <p>STEP 3/7</p>
                        <h1>When is your paper due?</h1>
                    </div>
                    <Button startIcon={<ArrowBack />} variant='contained' size='small' onClick={handleBack}>Back</Button>
                </div>
                <div className='step3'>
                    <h2>Pick a date when you need your assignment ready</h2>
                    <div className='calender'>
                        <Calender minDate={new Date()} selected={selectedDate} onChange={date => setSelectedDate(date)} />
                    </div>
                    <div className='step1'>
                        <div className='form'>
                            <h2>Pick the delivery option</h2>
                            <div className='radio'>
                                <div className='inputs'>
                                    <input 
                                        type='radio'
                                        name='work'
                                        value='academics'
                                        id='academics'
                                    />
                                    <label for='academics' className='topic'>Recommended</label>
                                    <label for='academics' className='description'>Aug 18, 4.17 PM</label>
                                </div>
                                <div className='inputs'>
                                    <input 
                                        type='radio'
                                        name='work'
                                        value='programming'
                                        id='programming'
                                    />
                                    <label for='programming' className='topic'>Close to deadline</label>
                                    <label for='programming' className='description'>Aug 20, 4.17 PM</label>
                                </div>
                            </div>
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

export default Step3;