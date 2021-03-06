import React, { useState, useEffect } from 'react';
import './Login.css'
import fire from '../Config/fire'
import { NavLink, Redirect } from 'react-router-dom';

const Login = () => {
    const [user, setuser] = useState(null)
    const [email, setEmail] = useState(null);
    const [emailerror, setemailerror] = useState(null);
    const [password, setpassword] = useState(null);
    const [passworderror, setpassworderror] = useState(null);
    const [isEmailverified, setisEmailverified] = useState(null);

    const clear = () => {
        setemailerror('');
        setpassworderror('');
    }
    const signinhandeler = async () => {
        await fire.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                setuser(res.user)
                clear();
            })
            .catch((err) => {
                if (err.code === 'auth/wrong-password')
                    setpassworderror(err.message);
                else
                    setemailerror(err.message);
            })
    }
    useEffect(() => {
        fire.auth().onAuthStateChanged((user) => {

            if (user) {
                setisEmailverified(user.emailVerified);
                setuser(user);
            }

        })
    }, [user, setuser])
    return (
        <>
            { user && <Redirect to='/verified_email' />}
            <div className="logindiv">
                {
                    <div className="logintab">
                        <div className="appname">
                            <img src="favicon.ico" alt="" />
                            <h1>Gallary</h1>
                        </div>
                        <div className="loginform">
                            <div className="logintext">
                                <h2>User-Login</h2>
                            </div>
                            <div className="logininput">
                                <p>Email</p>
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} required name='email' value={email} placeholder="Enter your email..." />
                                <span class="vaild">{emailerror}</span>
                                <p>Password</p>
                                <input type="password" onChange={(e) => { setpassword(e.target.value) }} required name="password" value={password} placeholder="Enter your password..." />
                                <span class="vaild">{passworderror}</span>
                                <button onClick={signinhandeler} >Sign in</button>
                            </div>
                            <div className="loginforgot"><button>Forgot Password?</button></div>
                            <div className="loginfooter">
                                <p>Don't Have an account? <button ><NavLink to='/sign_up'>Sign up</NavLink></button></p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Login;