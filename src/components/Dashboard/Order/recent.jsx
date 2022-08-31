import React, {useState, useEffect} from 'react';
import './order.css';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material'

function Recent() {

    const [recentOrders, setRecentOrders] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        const data = await fetch('http://127.0.0.1:8000/dashboard/list', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        const res = await data.json()
        setRecentOrders(res)
    }

    return (
        <>
            {recentOrders.length >= 1 ? recentOrders.map(recent => (
                <div className='recent' key={recent.details.id}>
                <div className='recent-details'>
                    <h3>History / See paper instructions</h3>
                    <p>#{recent.id} / {recent.details.pages} pages / {recent.details.academic_year}</p>
                    <p>Deadline: <span>Aug 18, 2022 at 8.25 AM (If you pay right now)</span></p>
                    <div className='verify'>
                        <button>Messages</button>
                        <button>Files</button>
                        <Link to={`/info/${recent.id}`}><button>Review & Pay</button></Link>
                    </div>
                </div>
                
                <div className='recent-progress'>
                    <h3>progress</h3>
                    <p>Your order is unpaid. Please check your email and follow the tips to complete the payment procedure.</p>
                    <div className='payment'>
                        <button onClick={async () => {
                            await fetch(`http://127.0.0.1:8000/dashboard/status/${recent.id}`, {
                                method: 'PUT',
                                headers: {
                                    'Authorization': `Token ${localStorage.getItem('token')}`,
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({status: 'Canceled'})
                            })
                            fetchData()
                            }} >Cancel order</button> 
                        <h2>$64.00</h2>
                    </div>
                </div>
            </div>
            )) : 
                <div className='place-order'>
                <Link to='/review'><Button variant='contained' size='small'>Place order</Button></Link>
                </div>
             }

        </>
    )
}

export default Recent;