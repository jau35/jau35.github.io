import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import AboutMyself from './AboutMyself';
import Experience from './Experience';

import { ConfigContext } from '../../App';

import './index.css';

const About = () => {
    const context = useContext(ConfigContext);
    context.setTheme('secondary');

    return (
        <>
            <section className='banner-area relative'>
                <div className='container'>
                    <div className='row d-flex align-items-center justify-content-center'>
                        <div className='about-content col-lg-12'>
                            <h1 className='text-white'>About Me</h1>
                            <p className='link-nav'>
                                <span className='box'>
                                    <Link to='/'>Home </Link>
                                    <Link to='/about'>About</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <AboutMyself page={'about'} />

            <Experience />
        </>
    );
};

export default About;
