import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NextBtn extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                    <p className="home-text">Calculator The Game</p> <br />
                    <Link to="/level1">
                        <button>Get Started</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default NextBtn;