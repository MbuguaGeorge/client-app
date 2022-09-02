import React, {useState, useEffect} from 'react';
import './myprofile.css';
import Head from '../Header/Header';

function MyProfile(){

    const [profile, setProfile] = useState({
        email: '',
        name: '',
        phone: ''
    });

    useEffect(() => {
        fetchData()
    }, []);

    async function fetchData(){
        const data = await fetch('https://georgeclientapp.com/profile/cur', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            }
        })

        const res = await data.json()
        console.log(res[0])
        setProfile(res[0])
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://georgeclientapp.com/profile/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(profile)
        }).then(
            res => {
                console.log(res)
                alert('your profile has been updated')
                fetchData()
            }
        ).catch(
            err => console.log(err)
        )
    };

    return (
        <>
            <Head />
            <div className='myprofile'>
                <h1>MY PROFILE</h1>
                <div className='myprofile-form'>
                    <h2>CONTACT INFORMATION</h2>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li>
                                <h4>Name</h4>
                                <input 
                                    type='text'
                                    value={profile.name}
                                    onChange={(e) => setProfile(prevState => ({
                                        ...prevState, name: e.target.value
                                    }))}
                                />
                            </li>
                            <li>
                                <h4>Email</h4>
                                <input 
                                    type='text'
                                    value={profile.email}
                                    onChange={(e) => setProfile(prevState => ({
                                        ...prevState, email: e.target.value
                                    }))}
                                />
                            </li>
                            <li>
                                <h4>Phone</h4>
                                <input 
                                    type='text'
                                    value={profile.phone}
                                    onChange={(e) => setProfile(prevState => ({
                                        ...prevState, phone: e.target.value
                                    }))}
                                />
                            </li>
                        </ul>
                        <input 
                            type='submit'
                            value='Update profile'
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default MyProfile;