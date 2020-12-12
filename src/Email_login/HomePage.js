import React, { useState, useEffect } from 'react';
import fire from '../fire'
import './stylefile.css'

import LoginPage from './LoginPage';


const HomePage = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [hasAccount, setHasAccount] = useState(true);


    const signIn = () => {
        fire
            .auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                setError(err.message);
            })
    }
    const signUp = () => {
        fire
            .auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                setError(err.message);
            })
    }
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser('');
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