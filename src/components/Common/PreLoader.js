import React, { Component } from 'react';

import './PreLoader.css'

class PreLoader extends Component {

    render() {
        return (
            <div className="preloader-area">
                <div className="loader-box">
                    <div className="loader"></div>
                </div>
            </div>
        );
    }
}

export default PreLoader;