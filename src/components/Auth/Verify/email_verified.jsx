import React, {Component} from 'react';

class EmailVerified extends Component{

    state = {
        valid: 0,
        token: ''
    };

    async componentDidMount(){
        const url = window.location.pathname
        const field = url.split('/')
        const token = field[2]

        this.setState({token: token})
        console.log(this.state.token)

        await fetch('http://127.0.0.1:8000/profile/validate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.token)
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
                      <div class="alert alert-success" role="alert">
                        <p>Email Verification Done</p>
                      </div>
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