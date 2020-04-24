import React, { Component } from 'react';

import NavBar from '../../Common/NavBar'
import PreLoader from '../../Common/PreLoader'
import AboutMyself from '../About/AboutMyself/AboutMyself'

import banner_img from '../../../static/img/banner-img.png';
import brand_cardconnect from '../../../static/img/brand/cardconnect.png';
import brand_bentleysystems from '../../../static/img/brand/bentleysystems.png';
import brand_sig from '../../../static/img/brand/sig.png';
import brand_siemens from '../../../static/img/brand/siemens.png';
import brand_drexel from '../../../static/img/brand/drexel.png';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar primary={true} />
                <PreLoader />
                        
                <section className="home-banner-area">
                    <div className="container">
                        <div className="row fullscreen d-flex align-items-center">
                            <div className="banner-content col-lg-6 col-md-12 justify-content-center ">
                                <div className="me wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">Welcome!</div>
                                <h1 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.7s">Joe Urbano</h1>
                                <div className="designation mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay="2.1s">
                                    Software <span className="developer">Developer</span> and aspiring <span className="entrepreneur">Entrepreneur</span>
                                </div>
                            </div>
                            <div className="banner-img col-lg-6 col-md-6 align-self-end">
                                <img className="img-fluid" src={banner_img} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="brands-area">
                    <div className="container">
                        <div className="brand-wrap">
                            <div className="row align-items-center active-brand-carusel justify-content-start no-gutters">
                                <div className="col single-brand">
                                    <img className="mx-auto brand-img" src={brand_cardconnect} alt="" />
                                </div>
                                <div className="col single-brand">
                                    <img className="mx-auto brand-img" src={brand_bentleysystems} alt="" />
                                </div>
                                <div className="col single-brand">
                                    <img className="mx-auto brand-img" src={brand_sig} alt="" />
                                </div>
                                <div className="col single-brand">
                                    <img className="mx-auto brand-img" src={brand_siemens} alt="" />
                                </div>
                                <div className="col single-brand">
                                    <img className="mx-auto brand-img" src={brand_drexel} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <AboutMyself page={'home'} />

            </React.Fragment>
        );
    }
}

export default Home;
