import React, {useState, useEffect} from 'react';
import './order.css';
import '../Profile/profile.css';
import box from '../../images/open-box.png';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
                    <h4>History / See paper instructions</h4>
                    <p>#{recent.id} / {recent.details.pages} pages / {recent.details.academic_year}</p>
                    <p>Deadline: <span>Aug 18, 2022 at 8.25 AM (If you pay right now)</span></p>
                </div>
                
                <div className='recent-progress'>
                    <div className='payment'>
                        {recent.complete === false ? <button onClick={async () => {
                            await fetch(`http://127.0.0.1:8000/dashboard/status/${recent.id}`, {
                                method: 'PUT',
                                headers: {
                                    'Authorization': `Token ${localStorage.getItem('token')}`,
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({status: 'Canceled'})
                            })
                            fetchData()
                            }}
                        >Cancel order</button> : <div></div>}
                    <div className='verify'>
                        <Link to={`/info/${recent.id}`}><button>Review & Pay <span>${recent.details.amount}</span></button></Link>
                    </div>
                    </div>
                </div>
            </div>
            )) : 
                <div className="active-order">
                    <img src={box} alt="open-box" />
                    <h3>You have no active orders</h3>
                    <Button variant="contained" size="small" startIcon={<AddCircleOutlineIcon />}>Place order</Button>
                </div>
             }

        </>
    )
}

export default Recent;