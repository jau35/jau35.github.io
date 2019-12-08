import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../static/img/logo.png';
import logo2 from '../../static/img/logo2.png';

class NavBar extends Component {

    render() {
        return (
            <header id="header" className={this.props.primary ? "" : "dark"}>
                <button type="button" id="mobile-nav-toggle"><i className="lnr lnr-menu"></i></button>
                <div className="container main-menu">
                    <div className="row align-items-center d-flex">
                        <div id="logo">
                        <Link className="active" to="/">
                            <img src={this.props.primary ? logo : logo2} alt="" title="" />
                        </Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                                <li><Link className="active" to="/">Home</Link></li>
                                <li><Link className="active" to="/about">About</Link></li>
                                <li><Link className="active" to="/portfolio">Portfolio</Link></li>
                            </ul>
                        </nav>

                        <nav id="mobile-nav">
                            <ul>
                                <li><Link className="active mobile-link" to="/">Home</Link></li>
                                <li><Link className="active mobile-link" to="/about">About</Link></li>
                                <li><Link className="active mobile-link" to="/portfolio">Portfolio</Link></li>
                            </ul>
                        </nav>
                        <div id="mobile-body-overly"></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavBar;