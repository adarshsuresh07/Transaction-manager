import React, { Component } from 'react'
import logo from '../image/logo.png'
import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'


class Navbar extends Component {

    state = {
        isOpen: false
    }

    showNav = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div className="main">
                <div className="navbar-logo-toggle">
                    <div className="logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div className="toggle-icon" onClick={this.showNav} >
                        <div className="toggle-bar"></div>
                        <div className="toggle-bar"></div>
                        <div className="toggle-bar"></div>
                    </div>
                </div>
                <ul className = {this.state.isOpen ? 'showNav' : 'undefined'}>
                    <li onClick={this.showNav}><Link to="/">Home</Link></li>
                    <li onClick={this.showNav}><Link to="/Notification">Notification</Link></li>
                    <li onClick={this.showNav}><Link to="/Trans">Transaction</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;