import React, { Component } from 'react'
import fakeAuth from './fakeAuth'
export default class Login extends Component {
    login = ()=>{
        fakeAuth.authenticate();
    }
    render() {
        return (
            <div>
                <p>You must log in to view the page at</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

