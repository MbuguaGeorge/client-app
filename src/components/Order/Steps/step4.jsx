import React, {useState} from 'react';
import './steps.css';
import {Form} from 'react-bootstrap';
import {ArrowForward, ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import Step3 from './step3';
import Step5 from './step5';

function Step4(){

    const [next, setNext] = useState(false);
    const [back, setBack] = useState(false);
    const [cur, setCur] = useState(true);

    const handleBack = () => {
        setBack(!back)
    };

    const handleSubmit = () => {
        setNext(!next)
    };

    const[count, setCount] = useState(1);
    const[words, setWords] = useState(275)

    const incrementCount = (event) =>{
        event.preventDefault()
        setCount(count => count + 1,)
        setWords(words => words * 2)
    };

    const decrementCount = (event) =>{
        event.preventDefault()
        setCount(count => Math.max(count - 1, 1))
        setWords(words => Math.max(words/2, 275))
    };

    let display;

    if (next === true) {
        display = (
            <Step5 />
        )
    } else if (back === true) {
        display = (
            <Step3 />
        )
    } else if (cur === true) {
        display = (
            <div className='step1'>
                <div className='det'>
                    <div className='details'>
                        <p>STEP 4/7</p>
                        <h1>Basic paper details</h1>
                    </div>
                    <Button startIcon={<ArrowBack />} variant='contained' size='small' onClick={handleBack}>Back</Button>
                </div>
                <div className='step4'>
                    <h2>Provide general requirements</h2>
                    <div className='requirements'>
                        <div className='paper'>
                            <h3>Type of paper</h3>
                            <div className="col-sm-12 col-md-6 mt-3">
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue="E.g. Essay" className='select'>
                                    <option className='unselect'>E.g. Essay</option>
                                    <option value="lecturer">Lecture</option>
                                    <option value="staff">Staff</option>
                                    <option value="Comrade">Comrade</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
                        </div>
                        <div className='subject'>
                            <h3>Subject or discipline</h3>
                            <div className="col-sm-12 col-md-6 mt-3">
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue="E.g. Economics" className='select'>
                                    <option className='unselect'>E.g. Economics</option>
                                    <option value="lecturer">Lecture</option>
                                    <option value="staff">Staff</option>
                                    <option value="Comrade">Comrade</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
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

export default Step4;