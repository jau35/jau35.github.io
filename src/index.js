import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/analytics';

import './css/font-awesome.min.css';
import './css/bootstrap.css';
import './css/animate.min.css';
import './css/owl.carousel.css';
import './css/main.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

var firebaseConfig = {
    apiKey: 'AIzaSyC4wlS3qqXJ2jtGFWPIbqs7AVDMsTRxR14',
    authDomain: 'jau35-github-io.firebaseapp.com',
    databaseURL: 'https://jau35-github-io.firebaseio.com',
    projectId: 'jau35-github-io',
    storageBucket: 'jau35-github-io.appspot.com',
    messagingSenderId: '825703231027',
    appId: '1:825703231027:web:5ccc280101fb35688b3d46',
    measurementId: 'G-9BBG0YLHTK',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const render = (user) => {
    ReactDOM.render(
        <App loggedInUser={user} />,
        document.getElementById('root')
    );
};
render(null);

firebase.auth().onAuthStateChanged((firebaseUser) => {
    let user = null;
    if (firebaseUser) {
        user = firebaseUser;
    }

    render(user);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
