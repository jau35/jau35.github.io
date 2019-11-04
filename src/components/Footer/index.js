import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import logo from '../../static/img/logo.png';

class Footer extends Component {

    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="footer-top flex-column">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <img src={logo} alt="" />
                                    </Link>
                                    <h4>Follow Me</h4>
                                </div>
                                <div className="footer-social">
                                    <a href="https://www.linkedin.com/in/joseph-urbano"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://www.github.com/jau35"><i className="fa fa-github"></i></a>
                                    <a href="https://www.facebook.com/joe.urbano.7"><i className="fa fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/joeurbano14/"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-bottom justify-content-center">
                        <p className="col-lg-8 col-sm-12 footer-text">
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;