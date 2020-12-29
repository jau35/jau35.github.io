import React from 'react';

import './ScrollToTop.css';

const ScrollToTop = () => {
    return (
        <div id='back-top'>
            <a title='Go to Top' href='#top'>
                <i className='fa fa-angle-double-up'></i>
            </a>
        </div>
    );
};

export default ScrollToTop;
