import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom'
import fire from '../Config/fire'
import './Signup.css'

const Signup = () => {
    const [user, setuser] = useState(null);
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [repassword, setrepassword] = useState('');

    // const clear = () => {
    //     setfirstname('');
    //     setlastname('');
    //     setEmail('');
    //     setpassword('');
    //     setrepassword('');
    // }

    const signuphandeler = () => {
        if (password === repassword && firstname && lastname) {
            fire.auth().createUserWithEmailAndPassword(email, password)
                .then((res) => {
                    setuser(res.user);
                    var user = fire.auth().currentUser;
                    user.sendEmailVerification();
                    user.updateProfile({
                        displayName: firstname + ' ' + lastname,

                    })

                })
                .catch((error) => {

                })
        }
        else {
            if (!firstname)
                alert('Fill the first name');
            else if (!lastname)
                alert('Fill the last name');
            else if (password !== repassword)
                alert('Dont match your password');
        }

    }
    return (
        <div className="logindiv">
            {
                user ? <Redirect to='/login' /> : null
            }

            <div className="logintab">
                <div className="appname">
                    <img src="favicon.ico" alt="" />
                    <h1>Gallary</h1>
                </div>
                <div className="loginform">
                    <div className="logintext">
                        <h2>Create new account</h2>
                    </div>
                    {/* <div className="nothings"></div> */}
                    <div className="logininput">

                        <p>First name</p>
                        <input type="text" name='firstname' onChange={(e) => { setfirstname(e.target.value) }} value={firstname} required placeholder="Enter your firstname..." />
                        <p>Last name</p>
                        <input type="text" name='lastname' onChange={(e) => { setlastname(e.target.value) }} value={lastname} required placeholder="Enter your firstname..." />
                        <p>Email</p>
                        <input type="text" name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} required placeholder="Enter your email..." />
                        <p>Password</p>
                        <input type="password" onChange={(e) => { setpassword(e.target.value) }} required placeholder="Enter your password..." />
                        <p>Re-password</p>
                        <input type="password" onChange={(e) => { setrepassword(e.target.value) }} required placeholder="Enter your password..." />
                        <p>don't match</p>
                        <button onClick={signuphandeler} >Sign up</button>

                    </div>
                    <div className="loginfooter">
                        <p>Have an account? <NavLink to='/login'>Sign in</NavLink></p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Signup;