import React, {useState, useEffect} from 'react';
import './order.css';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

function Canceled() {

    const [canceledOrders, setCanceledOrders] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        const data = await fetch('https://georgeclientapp.herokuapp.com/dashboard/canceled', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
        const res = await data.json()
        setCanceledOrders(res)
    }

    return (
        <>
            {canceledOrders.length >= 1 ? canceledOrders.map(recent => (
                <div className='recent' key={recent.details.id}>
                <div className='recent-details'>
                    <h3>History / See paper instructions</h3>
                    <p>#{recent.id} / {recent.details.pages} pages / {recent.details.academic_year}</p>
                    <p>Deadline: <span>Aug 18, 2022 at 8.25 AM (If you pay right now)</span></p>
                    <div className='verify'>
                        <button>Messages</button>
                        <button>Files</button>
                        <Link to={`/info/${recent.id}`}><button>Review</button></Link>
                    </div>
                </div>
                
                <div className='recent-progress'>
                    <h3>Canceled</h3>
                    <p>Your order has been canceled.</p>
                    <div className='payment'>
                        <button onClick={async () => {
                            await fetch(`https://georgeclientapp.herokuapp.com/dashboard/status/${recent.id}`, {
                                method: 'PUT',
                                headers: {
                                    'Authorization': `Token ${localStorage.getItem('token')}`,
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({status: 'Recent'})
                            })
                            fetchData()
                            }} >Re-order</button> 
                        <h2 style={{color: 'black'}}>${recent.amount}</h2>
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

export default Canceled;