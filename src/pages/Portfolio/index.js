import React, { Component } from 'react';

import { Link } from "react-router-dom";

import NavBar from '../../components/NavBar'

class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar primary={false} />

                <section className="banner-area relative">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="about-content col-lg-12">
                                <h1 className="text-white">
                                    Portfolio
                                </h1>
                                <p className="link-nav">
                                    <span className="box">
                                        <Link to="/">Home </Link>
                                        <Link to="/portfolio">Portfolio</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="work-area section-gap-top section-gap-bottom-90" id="comingsoon">
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-end mb-80">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>Coming soon</h2>
                                    <p>
                                        This page is currently under construction. Please check back another time for
                                        the latest updates on my current projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Portfolio;
