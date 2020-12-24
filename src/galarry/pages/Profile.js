import React from 'react';
import { useState } from 'react'
import './cssFile/Profile.css'
import { storage, db, timestamp } from '../Config/fire'
import Cover from './Cover'
import { Helmet } from 'react-helmet'


const Profile = (props) => {
    const { file, setfile, progress, setprogress, modaltoggle, setmodaltoggle, toggle, settoggle } = props;

    console.log(toggle)

    return (
        <div className=''>
            <Helmet>
                <title>Gallary || Profile</title>
            </Helmet>
            <Cover modaltoggle={modaltoggle} setmodaltoggle={setmodaltoggle} />

            {/* <div >
                <label>
                <input style={{display:'none'}} type='file'  onChange={(e) => { setFilename(e.target.files[0].name); setfile(e.target.files[0]) }} />
                <h1>+</h1>
                </label>
                <p>{filename} </p>
               
                <progress className={toggle? 'progressbar active': 'progressbar'} value={progress} max='200'/>
                <br></br>
                <button onClick={UploadHandeler} >Upload</button>
            </div> */}

        </div>
    );
};

export default Profile;