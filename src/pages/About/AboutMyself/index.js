import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import about_img from '../../../static/img/about-img.jpg'

class AboutMyself extends Component {
    render() {
        return (
            <section className="about-area section-gap">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6 about-left">
                            <img className="img-fluid" src={about_img} alt="" />
                        </div>
                        <div className="col-lg-5 col-md-12 about-right">
                            <div className="section-title">
                                <h2>about myself</h2>
                            </div>
                            <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                                <p>
                                    Joe Urbano is a Software Engineer at CardConnect, a financial services company
                                    located just outside of Philadelphia, PA. Prior to that, he was a student at Drexel University
                                    where he received a Bachelor's and Master's degree in Computer Science. As a student he gained
                                    nearly 2 years of experience developing software for large to midsize companies, including
                                    Bentley Systems, Susquehanna International Group, and Siemens. Joe has a passion for technology
                                    and learning, and served for nearly four years as a teaching assistant for Drexel's College of
                                    Computing and Informatics.
						            </p>
                                <p>
                                    Joe is equal parts technologist and hobbyist. In his free time he enjoys traveling,
                                    rock climbing, snowboarding, and playing guitar. He'll gladly take you up on a game of foosball
                                    or cornhole any day.
						            </p>
                            </div>

                            {this.props.page === 'home' ? 
                                <Link to="/about#experience" className="primary-btn white" data-text="More Info" style={{marginRight: '10px'}}>
                                    <span>M</span>
                                    <span>O</span>
                                    <span>R</span>
                                    <span>E</span>
                                    <span> </span>
                                    <span>I</span>
                                    <span>N</span>
                                    <span>F</span>
                                    <span>O</span>
                                </Link>
                            : '' }

                            <a href="/docs/JosephUrbano_resume.pdf" className="primary-btn" data-text="Resume" target="_blank" download>
                                <span>R</span>
                                <span>E</span>
                                <span>S</span>
                                <span>U</span>
                                <span>M</span>
                                <span>E</span>
                            </a>

                            {this.props.page === 'about' ?
                                <a href="/docs/JosephUrbano_resume_printable.pdf" className="primary-btn white small-font" style={{marginLeft: '10px'}} data-text="Printing? Use this instead." target="_blank" download>
                                    <span>P</span>
                                    <span>R</span>
                                    <span>I</span>
                                    <span>N</span>
                                    <span>T</span>
                                    <span>A</span>
                                    <span>B</span>
                                    <span>L</span>
                                    <span>E</span>
                                </a>
                            : ''}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutMyself;