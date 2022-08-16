import React from 'react';      
import './steps.css';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Step3(){
    return (
        <>
            <div className='step1'>
                <div className='details'>
                    <p>STEP 3/7</p>
                    <h1>When is your paper due?</h1>
                </div>
                <div className='step3'>
                    <h2>Pick a date when you need your assignment ready</h2>
                    <div className='calender'>
                        <Calender minDate={new Date()} />
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
                </div>
            </div>
        </>
    )
}

export default Step3;