import React, { Component } from 'react';
import auth_logo from '../assets/auth_logo.png';

class Home extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div id = "home">
                <p id = 'logo'>
                <img src= {auth_logo}/>
                </p>
                <div className = "input-box">
                    <div className = "text">
                    Username
                    </div>
                    <input className = "input"/>
                    <div className = "text">
                    Password
                    </div>
                    <input className = "input"/>
                    <div className = "button">
                    <button className='two'>Login</button>
                    <button className='one'>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;