import React, {useState} from 'react';
import {ArrowBack, ArrowForward} from '@mui/icons-material';
import Header from '../Header/header';
import {Button} from '@mui/material';
import Step1 from '../Steps/step1';
import Step2 from '../Steps/step2';
import Step3 from '../Steps/step3';
import Step4 from '../Steps/step4';
import Step5 from '../Steps/step5';
import Step6 from '../Steps/step6';
import Step7 from '../Steps/step7';
import './order.css';

function Order(){

    const [step, setStep] = useState(1);

    const incrementStep = (e) => {
        e.preventDefault()
        setStep(step => step + 1)
    };

    const decrementStep = (e) => {
        e.preventDefault()
        setStep(step => Math.max(step - 1, 1))
    };

    let display;

    if (step === 1) {
        display = (
            <div>{<Step1 />}</div>
        )
    } else if (step === 2) {
        display = (
            <div>{<Step2 />}</div>
        )
    } else if (step === 3) {
        display = (
            <div>{<Step3 />}</div>
        )
    } else if (step === 4) {
        display = (
            <div>{<Step4 />}</div>
        )
    } else if (step === 5) {
        display = (
            <div>{<Step5 />}</div>
        )
    } else if (step === 6) {
        display = (
            <div>{<Step6 />}</div>
        )
    } else if (step === 7) {
        display = (
            <div>{<Step7 />}</div>
        )
    };

    let forwardStyle;
    let backStyle;

    if (step <= 6) {
        forwardStyle = {
            display: 'flex'
        }
    } else {
        forwardStyle = {
            display: 'none'
        }
    };

    if (step === 1) {
        backStyle = {
            display: 'none'
        }
    }

    return (
        <>
            <div className='order'>
                <Header />
                <div className='steps'>
                    {display}
                </div>
                <div className='buttons'>
                    <Button startIcon={<ArrowBack />} variant='contained' size='small' onClick={decrementStep} style={backStyle}>Back</Button>
                    <Button endIcon={<ArrowForward />} variant='contained' size='small' onClick={incrementStep} style={forwardStyle}>Next Step</Button>
                </div>
            </div>
        </>
    )
}

export default Order;