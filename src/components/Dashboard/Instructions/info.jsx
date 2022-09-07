import React, {useState, useEffect} from 'react';
import './info.css';
import Head from '../Header/Header';
import Payment from '../../Payments/payment';

function Info(){
    
    const [order, setOrder] = useState([]);
    const [id, setId] = useState('')

    // TODO:payment
    useEffect(() => {
        const url = window.location.pathname
        const field = url.split('/')
        const id = field[2]
        setId(id)

        async function fetchData(){
            const data = await fetch(`http://127.0.0.1:8000/dashboard/recent/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            })

            const res = await data.json()
            setOrder(res)
        }

        fetchData()
    },[])

    const handleReorder = async() => {
        await fetch(`http://127.0.0.1:8000/dashboard/status/${id}`, {
            method: 'PUT',
            headers: {
            'Authorization': `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({status: 'Recent'})
        })

        window.location.reload()
    };

    let checkout;

    order.forEach(stat => {
        if (stat.status === 'Recent'){      
            checkout = (
                <Payment style1={{position: 'relative', left: '70%'}} style2={{display: 'none'}} style3={{marginTop: '105px'}} pk={id}/>
            )
        } else if(stat.status === 'Canceled'){
            checkout = (
                <div className='reorder_btn'>
                <button style={{position: 'absolute', left: '70%', top: '60%'}} onClick={handleReorder}>Re-order</button>
                </div>
            )
        }
    })

    return (
        <>
        <Head />
        <div className='info'>
        <div className='paper_instructions'>
        <h1>SEE PAPER INSTRUCTIONS <span>#{id}</span></h1>
        </div>
            <div className='details'>
                <button>INFO</button>
                <button>MESSAGES</button>
                <button>FILES</button>
            </div>

            <div className='pay'>
            {order.map(new_order => (
                <div className='order-info' key={new_order.id}>
                <ul>
                    <li>
                        <h1>Academic level</h1>
                        <h2>{new_order.details.academic_year}</h2>
                    </li>
                    <li>
                        <h1>Type of paper</h1>
                        <h2>{new_order.details.paper_type}</h2>
                    </li>
                    <li>
                        <h1>Discipline</h1>
                        <h2>{new_order.details.subject}</h2>
                    </li>
                    <li>
                        <h1>Title</h1>
                        <h2>See paper Instructions</h2>
                    </li>
                    <li>
                        <h1>Paper format</h1>
                        <h2>{new_order.details.paper_format}</h2>
                    </li>
                    <li>
                        <h1>Canceled</h1>
                        <h2>Aug 17, 2022 at 11.00 AM</h2>
                    </li>
                    <li>
                        <h1>Number of Sources</h1>
                        <h2>{new_order.details.references}</h2>
                    </li>
                    <li>
                        <h1>2 pages x $32.00</h1>
                        <h2>$64.00</h2>
                    </li>
                    <li>
                        <h1>Grand total price</h1>
                        <h2>$64.00</h2>
                    </li>
                </ul>
            </div>
            ))}
            {checkout}
            </div>
        </div>
        </>
    )
}

export default Info;