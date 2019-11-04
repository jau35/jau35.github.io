import React from 'react';
import ReactDOM from 'react-dom';

import './css/linearicons.css'
import './css/font-awesome.min.css'
import './css/bootstrap.css'
import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/animate.min.css'
import './css/owl.carousel.css'
import './css/main.css'

import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App/>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
