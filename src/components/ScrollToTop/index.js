import React, { Component } from 'react';

class ScrollToTop extends Component {

    render() {
        return (
            <div id="back-top">
                <a title="Go to Top" href="#top">
                    <i className="lnr lnr-arrow-up"></i>
                </a>
            </div>
        );
    }
}

export default ScrollToTop;