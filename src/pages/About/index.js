import React, { Component } from 'react';

import { Link } from "react-router-dom";

import NavBar from '../../components/NavBar'
import AboutMyself from './AboutMyself'
import Experience from './Experience'

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar primary={false} />
                
                <section className="banner-area relative">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="about-content col-lg-12">
                                <h1 className="text-white">
                                    About Me
                                </h1>
                                <p className="link-nav">
                                    <span className="box">
                                        <Link to="/">Home </Link>
                                        <Link to="/about">About</Link>
                                    </span></p>
                            </div>
                        </div>
                    </div>
                </section>

                <AboutMyself />

                <Experience />
            </React.Fragment>
        );
    }
}

export default About;
