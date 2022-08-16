import React, {useState} from 'react';
import './steps.css';

function Step4(){

    const[count, setCount] = useState(1);
    const[words, setWords] = useState(275)

    const incrementCount = (event) =>{
        event.preventDefault()
        setCount(count => count + 1,)
        setWords(words => words * 2)
    }

    const decrementCount = (event) =>{
        event.preventDefault()
        setCount(count => Math.max(count - 1, 1))
        setWords(words => Math.max(words/2, 275))
    }

    return (
        <>
            <div className='step1'>
                <div className='details'>
                    <p>STEP 4/7</p>
                    <h1>Basic paper details</h1>
                </div>
                <div className='step4'>
                    <h2>Provide general requirements</h2>
                    <div className='requirements'>
                        <div className='paper'>
                            <h3>Type of paper</h3>
                        </div>
                        <div className='subject'>
                            <h3>Subject or discipline</h3>
                        </div>
                        <div className='pages'>
                            <h3>Pages</h3>
                            <div className='page'>
                                <div className="ref__count">
                                    <button onClick={decrementCount} >-</button>
                                    <input type="text" value={count}/>
                                    <button onClick={incrementCount}>+</button>
                                </div>
                                <div className='word__count'>
                                    <h4>{words} words</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step4;