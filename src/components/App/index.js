import React, { useState } from 'react';
import { HashRouter, Route } from "react-router-dom";

import Footer from '../Footer'
import Contact from '../Contact'
import ScrollToTop from '../ScrollToTop'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Portfolio from '../../pages/Portfolio'
import Account from '../../pages/Account'

import AuthListener from './AuthListener'

export const AuthContext = React.createContext(null);

function App() {    
    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            <AuthListener/>
            <HashRouter basename="/">
                <React.Fragment>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/account" component={Account} />

                    <Contact />
                    <Footer />
                    <ScrollToTop />
                </React.Fragment>
            </HashRouter>
        </AuthContext.Provider>
    );
}

export default App;
