import React from 'react';
import { useState } from 'react'
import './cssFile/Profile.css'
import { storage, db, timestamp } from '../Config/fire'
import Cover from './Cover'
import { Helmet } from 'react-helmet'


const Profile = (props) => {
    const {modaltoggle, setmodaltoggle} = props;
    // console.log(modaltoggle);

    return (
        <div className=''>
            <Helmet>
                <title>Gallary || Profile</title>
            </Helmet>
            <Cover modaltoggle={modaltoggle} setmodaltoggle={setmodaltoggle} />
        </div>
    );
};

export default Profile;