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
                </div>
            </div>
        )
    }
}

export default Home;