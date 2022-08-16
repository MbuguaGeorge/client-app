import React from 'react';
import './steps.css';

function Step7(){
    return (
        <>
            <div className='step1'>
                <div className='details'>
                    <p>STEP 7/7</p>
                    <h1>Upgrades</h1>
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
                            <label for='academics' className='topic'>Advanced writer</label>
                            <label for='academics' className='description'>Expert writer in the chosen field</label>
                        </div>
                        <div className='inputs'>
                            <input 
                                type='radio'
                                name='work'
                                value='programming'
                                id='programming'
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
                            />
                            <label for='calculations' className='topic'>Explanations and comments</label>
                            <label for='calculations' className='description'>Detailed comments on the key writing aspects of your paper</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step7;