import React, {useState, useRef} from 'react';
import './steps.css';
import {Form} from 'react-bootstrap';
import {ArrowForward, ArrowBack} from '@mui/icons-material';
import {Button} from '@mui/material';
import Step4 from './step4';
import Step6 from './step6';

function Step5(){

    const[count, setCount] = useState(1);

    const [next, setNext] = useState(false);
    const [back, setBack] = useState(false);
    const [cur, setCur] = useState(true);
    setCur(true)

    const instructionRef = useRef();

    const [details, setDetails] = useState({
        instructions: '',
        instruction_file: '',
        format: '',
        references: count
    });

    const handleBack = () => {
        setBack(!back)
    };

    const handleSubmit = () => {
        localStorage.setItem('STEP5', JSON.stringify(details))
        console.log(details)
        setNext(!next)
    };

    const incrementCount = (event) =>{
        event.preventDefault()
        setCount(count => count + 1,)
    };

    const decrementCount = (event) =>{
        event.preventDefault()
        setCount(count => Math.max(count - 1, 1))
    };

    let display;

    if (next === true) {
        display = (
            <Step6 />
        )
    } else if (back === true) {
        display = (
            <Step4 />
        )
    } else if (cur === true) {
        display = (
            <div className='step1'>
                <div className='det'>
                    <div className='details'>
                        <p>STEP 5/7</p>
                        <h1>Detailed Requirements</h1>
                    </div>
                    <Button startIcon={<ArrowBack />} variant='contained' size='small' onClick={handleBack}>Back</Button>
                </div>
                <div className='step5'>
                    <h2>Specify additional instructions</h2>
                    <div className='instructions'>
                        <h3>Instructions</h3>
                        <div className='up'>
                            <textarea 
                                placeholder='Type anything you feel important for the writer to consider or attach files with details'
                                value={details.instructions}
                                onChange={e => setDetails(details => ({
                                    ...details, instructions: e.target.value
                                }))}
                            ></textarea>
                            <div className='upload'>
                                <input 
                                    ref={instructionRef}
                                    type='file' required
                                    onChange={e => setDetails(details => ({
                                        ...details, instruction_file: e.target.files[0]
                                    }))}
                                />
                            </div>
                        </div>
                        <div className='format'>
                            <h4>Paper format</h4>
                            <div className="col-sm-12 col-md-6 mt-3">
                                <Form.Group controlId="formGridState">
                                    <Form.Select defaultValue="MLA" className='select' onChange={e => setDetails(details => ({
                                        ...details, format: e.target.value
                                        }))}>
                                    <option value="MLA">MLA</option>
                                    <option value="APA 6">APA 6</option>
                                    <option value="APA 7">APA 7</option>
                                    <option value="Chicago / Turabian">Chicago / Turabian</option>
                                    <option value="Not Applicable">Not Applicable</option>
                                    </Form.Select>
                                </Form.Group>
                            </div>
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

export default Step5;