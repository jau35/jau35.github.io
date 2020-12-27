import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import NavBar from './Common/NavBar';
import Footer from './Common/Footer';
import Contact from './Common/Contact';
import ScrollToTop from './Common/ScrollToTop';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Login from './Pages/Account/Login';
import PageNotFound from './Pages/Errors/PageNotFound';

export const ConfigContext = React.createContext(null);

const App = ({ loggedInUser }) => {
    const [theme, setTheme] = useState('primary');

    return (
        <ConfigContext.Provider value={{ loggedInUser, theme, setTheme }}>
            <HashRouter basename='/'>
                <>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/portfolio' component={Portfolio} />
                        <Route path='/account' component={Login} />
                        <Route component={PageNotFound} />
                    </Switch>
                    <Contact />
                    <Footer />
                    <ScrollToTop />
                </>
            </HashRouter>
        </ConfigContext.Provider>
    );
};

export default App;
