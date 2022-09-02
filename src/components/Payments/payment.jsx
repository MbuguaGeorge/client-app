import React, {useState, useEffect} from 'react';
import './payment.css';
import {useNavigate} from 'react-router-dom';
import Head from '../Dashboard/Header/Header';

function Payment({style1, style2, style3, pk}){

    const [card, setCard] = useState({
        card_no: '',
        expiry: '',
        card_cvv: '',
        name: '',
        email: '',
        amount: '',
        ref: ''
    });

    const [valid, setValid] = useState(0);

    useEffect(() => {

        async function fetchData1(){
            const data = await fetch(`https://georgeclientapp.herokuapp.com/dashboard/recentorder/${pk}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application.json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            })
            const res = await data.json()
            let price = res[0].details.amount
            setCard(card => ({
                ...card, ref: pk, amount: price
            }))
        }

        if(pk){
            fetchData1()

        }else{

        const url = window.location.pathname
        const field = url.split('/')
        const id = field[3]

        async function fetchData(){
            const data = await fetch(`https://georgeclientapp.herokuapp.com/dashboard/neworder/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application.json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            })
            const res = await data.json()
            setCard(card => ({
                ...card, ref: res.id, amount: res.details.amount
            }))
        }


        fetchData()}

    },[pk])

    const handleSubmit = (e) => {
        localStorage.removeItem('amount')
        e.preventDefault()
        console.log(card)

        async function postData(){
            const data = await fetch('https://georgeclientapp.herokuapp.com/card/receive-payment', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(card)
            })
    
            const res = await data.json()
            if (res.status === 'success'){
                setValid(1)
            }else if(res.status === 'failed'){
                setValid(2)
            }
        }
        postData()
    };

    let navigate = useNavigate();

    if (valid === 1) {
        return navigate('/pay/success', {replace: true})
    }else if (valid === 2){
        return navigate('/pay/invalid', {replace: true})
    };

    return (
        <>
        <div style={style2}><Head /></div>
        <div className='pay-form' style={style3}>
            <div className='payment' style={style1}> 
                <form onSubmit={handleSubmit}>
                    <div className='card-info'>
                        <h3>Card Information</h3>
                        <input 
                            type='number' required
                            placeholder='1234 1234 1234 1234'
                            value={card.card_no}
                            onChange={(e) => {
                                setCard(prevState => ({
                                    ...prevState, card_no: e.target.value
                                }))
                            }}
                        />
                    </div>
                    <div className='expiry'>
                        <input 
                            type='number' required
                            placeholder='MM/YYYY'
                            value={card.expiry}
                            onChange={(e) => {
                                setCard(prevState => ({
                                    ...prevState, expiry: e.target.value
                                }))
                            }}
                        />
                        <input 
                            type='number' required
                            placeholder='CVV'
                            value={card.card_cvv}
                            onChange={(e) => {
                                setCard(prevState => ({
                                    ...prevState, card_cvv: e.target.value
                                }))
                            }}
                        />
                    </div>
                    <div className='card-name'>
                        <h3>Cardholder's name</h3>
                        <input 
                            type='text' required
                            placeholder='Name on card'
                            value={card.name}
                            onChange={(e) => {
                                setCard(prevState => ({
                                    ...prevState, name: e.target.value
                                }))
                            }}
                        />
                    </div>
                    <div className='email'>
                        <h3>Email</h3>
                        <input 
                            type='email' required
                            placeholder='Biling email'
                            value={card.email}
                            onChange={(e) => {
                                setCard(prevState => ({
                                    ...prevState, email: e.target.value
                                }))
                            }}
                        />
                    </div>
                    <div className='pay'>
                        <input 
                            type='submit'
                            placeholder='Pay $25.00'
                        />
                    </div>
                </form>
            </div>
            <div>
                <div className='price' style={style2}>
                    <h1>Total Price</h1>
                    <h2>${card.amount}</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Payment;