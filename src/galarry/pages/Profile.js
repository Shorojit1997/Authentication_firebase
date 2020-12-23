import React from 'react';
import { useState } from 'react'
import './cssFile/Profile.css'
import { storage, db, timestamp } from '../Config/fire'
import Cover from './Cover'


const Profile = () => {
    const [file, setfile] = useState(null)
    const[filename,setFilename]=useState('')
    const [progress, setprogress] = useState(0)
    const [toggle, settoggle] = useState(false)
    


    return (
        <div className=''>
            <Cover />

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