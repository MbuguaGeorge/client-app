import React from 'react';
import './steps.css';

function Step6(){
    return (
        <>
            <div className='step1'>
                <div className='details'>
                    <p>STEP 6/7</p>
                    <h1>What do you expect?</h1>
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
                </div>
            </div>
        </>
    )
}

export default Step6;