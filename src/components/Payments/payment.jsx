import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './payment.css';
import {useNavigate} from 'react-router-dom';
import creditcard from '../images/debit-cards.png';

function Payment(){

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

        const url = window.location.pathname
        const field = url.split('/')
        const id = field[3]

        async function fetchData(){
            const data = await fetch(`http://127.0.0.1:8000/dashboard/neworder/${id}`, {
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

        fetchData()

    },[])

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
        <div className="pay-form-container">
        <div className="proceed">
            <Link to="/dashboard/orders" style={{textDecoration: 'none'}}><button>Return to dashboard</button></Link>
        </div>
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
                            placeholder='MM/YY'
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
                        <button>Pay Now ${card.amount}</button>
                    </div>
                </form>
            </div>
            <div className='price'>
                <img src={creditcard} alt="credit cards" />
                <div className="card-content">
                    <h2>Enter Card Details</h2>
                    <p>Enter card details to proceed with this payment</p>
                    <p>Add your phone number to receive important SMS notifications <br/> about your order(s) and account.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Payment;