import React, { useState, useEffect } from 'react';
import firebase from './firebase'
// import './stylefile.css'

import LoginPage from './LoginPage';


const HomePage = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [hasAccount, setHasAccount] = useState(true);


    const signIn = () => {
        firebase
            .auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res.email);
              
            })
            .catch(err => {
                setError(err.message);
            })
    }
    const signUp = () => {
        firebase
            .auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                var user = firebase.auth().currentUser;
               // user.sendSignInLinkToEmail(res.email);
                user.sendEmailVerification();
                user.updateProfile({
                    displayName: "Jane Q. User",
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                  })
            })
            .catch(err => {
                setError(err.message);
            })
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);

                console.log(user.email)
                console.log(user.displayName);
                console.log(user.photoURL)
                console.log(user.emailVerified);
                console.log(user.uid);
               
            } else {
                setUser(null);
            }
        })
    }, [])
    const styles = {
        margin: '30px'
    }
    return (
        <div>
            {user ?
                (<>
                    <LoginPage />
                </>) :
                (<>
                    < div style={styles}>
                        <span >

                            <input
                                name='email'
                                type='email'
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <input
                                name="password"
                                type='password'
                                required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </span>
                        {
                            hasAccount?( 
                                <>
                                <button onClick={signIn}  >Submit</button>
                                <span><p style={{display:'inline-block'}}>Dont have an account?</p>  <button onClick={()=>{setHasAccount(!hasAccount)}}>sign Up</button></span>
                                </>
                            ):
                            ( 
                                <>
                                <button onClick={signUp}  >Submit</button>
                                <span><p style={{display:'inline-block'}} >Have an account</p>  <button onClick={()=>{setHasAccount(!hasAccount)}}>sign In</button></span>
                                </>
                            )

                        }

                       

                    </div>
                </>
                )}
        </div >

    );
};

export default HomePage;