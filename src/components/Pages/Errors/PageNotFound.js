import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { ConfigContext } from '../../App';

const PageNotFound = () => {
    const context = useContext(ConfigContext);
    context.setTheme('secondary');

    return (
        <>
            <section className='banner-area relative'>
                <div className='container'>
                    <div className='row d-flex align-items-center justify-content-center'>
                        <div className='about-content col-lg-12'>
                            <h1 className='text-white'>Page not found</h1>
                            <p>
                                Looks like we couldn't find what you're looking
                                for.
                            </p>
                            <p className='link-nav'>
                                <span className='box'>
                                    <Link to='/'>Home </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageNotFound;
