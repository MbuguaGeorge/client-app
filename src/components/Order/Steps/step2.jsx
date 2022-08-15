import React from 'react';
import './steps.css';

function Step2(){
    return (
        <>
            <div className='step1'>
                <div className='details'>
                    <p>STEP 2/7</p>
                    <h1>Which year are you in?</h1>
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
                            />
                            <label for='academics' className='topic'>Senior in high school</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='programming'
                                id='programming'
                            />
                            <label for='programming' className='topic'>Undergraduate student (years 1-2)</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='calculations'
                                id='calculations'
                            />
                            <label for='calculations' className='topic'>Undergraduate student (years 3-4)</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='calculations'
                                id='calculations'
                            />
                            <label for='calculations' className='topic'>Graduate student</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='calculations'
                                id='calculations'
                            />
                            <label for='calculations' className='topic'>PhD student</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step2;