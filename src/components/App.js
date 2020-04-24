import React, { useState } from 'react';
import { HashRouter, Route } from "react-router-dom";

import Footer from './Common/Footer'
import Contact from './Common/Contact'
import ScrollToTop from './Common/ScrollToTop'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import Login from './Pages/Account/Login'

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
                    <Route path="/account" component={Login} />

                    <Contact />
                    <Footer />
                    <ScrollToTop />
                </React.Fragment>
            </HashRouter>
        </AuthContext.Provider>
    );
}

export default App;
