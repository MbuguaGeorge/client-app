import React, {Component} from 'react';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
import './verify.css';

class EmailVerified extends Component{

    state = {
        valid: 0
    };

    async componentDidMount(){
        const url = window.location.pathname
        const field = url.split('/')
        const token = field[2]

        if (token) {
            this.setState({email_token: token})
        }

        fetch('http://georgeclientapp.herokuapp.com/profile/validate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({'email_token': token})
        }).then(
            res => res.json()
        ).then(
            res => {
                if (res.status === 'success') {
                    this.setState({valid: 1})
                } else if (res.status === 'failed') {
                    this.setState({valid: 2})
                }
            }
        ).catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                    {this.state.valid === 1 && (
                      <>
                      <div className='email-verified'>
                        <h4>Logo</h4>
                        <h3>Thanks for signing up.</h3>
                        <p>Click the button below to place an order</p>
                        <Link to='/review'><Button variant='contained' size='small'>Place order</Button></Link>
                      </div>
                      </>
                    )}
                    {this.state.valid === 2 && (
                      <div class="alert alert-danger" role="alert">
                        <p>Email Verification Failed. Email may be already verified or the link is broken.</p>
                      </div>
                    )}
            </div>
        )
    }
}

export default EmailVerified;