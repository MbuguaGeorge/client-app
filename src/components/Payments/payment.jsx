import React, {useState} from 'react';
import './payment.css';
import {useNavigate} from 'react-router-dom';
import Head from '../Dashboard/Header/Header';

function Payment(){

    const total = localStorage.getItem('amount')

    const [card, setCard] = useState({
        card_no: '',
        expiry: '',
        card_cvv: '',
        name: '',
        email: '',
        amount: total
    });

    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (e) => {
        // localStorage.removeItem('amount')
        e.preventDefault()

        async function postData(){
            const data = await fetch('http://127.0.0.1:8000/card/receive-payment', {
                method: 'POST',
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(card)
            })
    
            const res = await data.json()
            console.log(res)
        }
        postData()
    };

    let navigate = useNavigate();

    if (redirect) {
        return navigate('/pay/success', {replace: true})
    }

    return (
        <>
        <Head />
        <div className='pay-form'>
            <div className='payment'>
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
                <div className='price'>
                    <h1>Total Price</h1>
                    <h2>${total}</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Payment;