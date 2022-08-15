import React from 'react';
import Header from '../Header/header';
import './order.css';
import Step1 from '../Steps/step1';
import {Button} from '@mui/material';
import {ArrowBack, ArrowForward} from '@mui/icons-material';

function Order(){
    return (
        <>
            <div className='order'>
                <Header />
                <div className='steps'>
                    <Step1 />
                </div>
                <div className='buttons'>
                    <Button startIcon={<ArrowBack />} variant='contained' size='small'>Back</Button>
                    <Button endIcon={<ArrowForward />} variant='contained' size='small'>Next Step</Button>
                </div>
            </div>
        </>
    )
}

export default Order;