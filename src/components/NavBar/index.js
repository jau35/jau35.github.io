import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../static/img/logo.png';

class NavBar extends Component {

    render() {
        return (
            <header id="header">
                <div className="container main-menu">
                    <div className="row align-items-center d-flex">
                        <div id="logo">
                        <Link className="active" to="/"><img src={logo} alt="" title="" /></Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li className=""><Link className="active" to="/">Home</Link></li>
                                <li><Link className="active" to="/about">About</Link></li>
                                <li><Link className="active" to="/portfolio">Portfolio</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;