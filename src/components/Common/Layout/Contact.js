import React from 'react';

import './index.css';

const Contact = () => {
    return (
        <section className='contact-area section-gap'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='contact-title'>
                            <h2>Contact Me</h2>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className='row mt-80'>
                    <div className='col-lg-4 col-md-4'>
                        <div className='contact-box'>
                            <h4>(610) 389-6326</h4>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                        <div className='contact-box'>
                            <h4>joeurbano14@gmail.com</h4>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4'>
                        <div className='contact-box'>
                            <h4>jau35.github.io</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
