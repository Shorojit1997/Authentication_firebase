import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import fire from '../Config/fire'


const Verified_email = () => {

    const [user, setuser] = useState(false)

    useEffect(() => {
        fire.auth().onAuthStateChanged((us) => {
            if (us)
                setuser(us.emailVerified);
        })
    }, [setuser, user])


    return (
        <div>
            {user && <Redirect to='/' />}
            <h1>Please cheak inbox for email verification</h1>
        </div>
    );
};

export default Verified_email;