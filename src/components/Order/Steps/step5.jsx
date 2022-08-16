import React, {useState} from 'react';
import './steps.css';

function Step5(){

    const[count, setCount] = useState(1);

    const incrementCount = (event) =>{
        event.preventDefault()
        setCount(count => count + 1,)
    }

    const decrementCount = (event) =>{
        event.preventDefault()
        setCount(count => Math.max(count - 1, 1))
    }

    return (
        <>
            <div className='step1'>
                <div className='details'>
                    <p>STEP 5/7</p>
                    <h1>Detailed requirements</h1>
                </div>
                <div className='step5'>
                    <h2>Specify additional instructions</h2>
                    <div className='instructions'>
                        <h3>Instructions</h3>
                        <div className='up'>
                            <textarea 
                                placeholder='Type anything you feel important for the writer to consider or attach files with details'
                            ></textarea>
                            <div className='upload'>
                                <h4>Browse</h4>
                            </div>
                        </div>
                        <div className='format'>
                            <h4>Paper format</h4>
                        </div>
                        <div className='ref'>
                            <h4>Referrences to be used</h4>
                            <p>The minimum number of sources for the writer to use and list on the reference page.</p>
                            <div className="ref__count">
                                <button onClick={decrementCount} >-</button>
                                <input type="text" value={count}/>
                                <button onClick={incrementCount}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step5;