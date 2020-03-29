import React, { useState, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import NavBar from '../../components/NavBar'
import { AuthContext } from '../../components/App'

const Login = () => {
    const Auth = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const handleForm = e => {
        e.preventDefault();
        
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => {
            setErrors(e.message);
        });
    };

    if (Auth.loggedInUser) {
        return (
            <React.Fragment>
                <NavBar primary={false} />
                    <section className="banner-area section-gap-top section-gap-bottom-90">
                        <div className="container" >
                            <h1 className="text-white">
                                Congrats... you're logged in as {Auth.loggedInUser.email}
                            </h1>
                        </div>
                    </section>
            </React.Fragment>
        )
    }
    else {
        return (
            <React.Fragment>
                <NavBar primary={false} />
                <section className="banner-area section-gap-top section-gap-bottom-90">
                    <div className="container" >
                        <div className="section-title">
                            <h2 className="text-white">
                                Login
                            </h2>

                            <form onSubmit={e => handleForm(e)}>
                                <input className="single-input" value={email} onChange={e => setEmail(e.target.value)} name="email" type="email" placeholder="Email"/>
                                <input className="single-input" value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" placeholder="Password"/>
                                <button className="primary-btn" data-text="Login" type="submit">
                                    <span>L</span><span>O</span><span>G</span><span>I</span><span>N</span>
                                </button>
                                <span style={{color: '#e45447'}}>{error}</span>
                            </form>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Login;
