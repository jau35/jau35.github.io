import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import NavBar from '../NavBar'
import Footer from '../Footer'
import Contact from '../Contact'
import ScrollToTop from '../ScrollToTop'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Portfolio from '../../pages/Portfolio'

class App extends Component {
    render() {
        return (
            <HashRouter basename="/">
                <React.Fragment>
                    <NavBar />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />

                    <Contact />
                    <Footer />
                    <ScrollToTop />
                </React.Fragment>
            </HashRouter>
        );
    }
}

export default App;
