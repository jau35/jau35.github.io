import { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthContext } from '..'

const AuthListener = () => {
    const Auth = useContext(AuthContext);
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            Auth.setLoggedInUser(firebaseUser);
        } else {
            Auth.setLoggedInUser(null);
        }
    });

    return null;
}

export default AuthListener;