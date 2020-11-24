import React, { useState, useEffect } from 'react';
import fire from './fire'
import Login from './Login';
import Hero from './Hero'

const Home1 = () => {

    const [user, setUser] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('');
    const clearInputs = () => {
        setEmail('');
        setPassword("");
    }
    const clearErrors = () => {
        setEmailerror('');
        setPasswordError('');
    }
    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invaild-email":
                    case 'auth/user-disabled':
                    case "auth/user-not-found":
                        setEmailerror(err.message);
                        break;
                    case "auth/wrongpassword":
                        setPasswordError(err.message);
                        break;
                }
            }
            )
    }
    const handleSignup = () => {
        console.log('yes clicked')
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        setPasswordError(err.message);
                        break;
                    case 'auth/invaild-email':
                        setPasswordError(err.message);
                        break;
                    case "auth/weak-password":
                        setEmailerror(err.message);
                        break;

                }
            }
            )
    }
    const handleLogout = () => {
        fire.auth().signOut();

    }
    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        })
    }
    useEffect(() => {
        authListener();


    }, [])


    return (
        <div>
            
            { user? (
                 <Hero handleLogout={handleLogout}/>
            ):
            (
                <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailerror={emailerror}
                passwordError={passwordError}
            />
            )

            }
            
           

        </div>
    );
};

export default Home1;







