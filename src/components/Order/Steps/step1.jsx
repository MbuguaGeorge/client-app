import React from 'react';
import './steps.css';

function Step1(){
    return (
        <>
            <div className='step1'>
                <div className='details'>
                    <p>STEP 1/7</p>
                    <h1>What do you need help with?</h1>
                </div>
                <div className='form'>
                    <h2>Choose the task you want to delegate</h2>
                    <div className='radio'>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='academics'
                                id='academics'
                            />
                            <label for='academics' className='topic'>Academic Writing</label>
                            <label for='academics' className='description'>E.g. essay, research paper, coursework in any subject</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='programming'
                                id='programming'
                            />
                            <label for='programming' className='topic'>Programming assignment</label>
                            <label for='programming' className='description'>E.g. programming, database optimisation, modeling</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='calculations'
                                id='calculations'
                            />
                            <label for='calculations' className='topic'>Calculations assignment</label>
                            <label for='calculations' className='description'>E.g. math problems, engineering computations, finance balance sheets</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step1;