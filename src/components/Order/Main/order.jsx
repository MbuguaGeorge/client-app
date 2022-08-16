import React from 'react';
import Header from '../Header/header';
import './order.css';
import Step4 from '../Steps/step4';
import {Button} from '@mui/material';
import {ArrowBack, ArrowForward} from '@mui/icons-material';

function Order(){
    return (
        <>
            <div className='order'>
                <Header />
                <div className='steps'>
                    <Step4 />
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