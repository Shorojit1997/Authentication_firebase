import React from 'react';
import { useState } from 'react'
import './cssFile/Profile.css'
import { storage, db, timestamp } from '../Config/fire'


const Profile = () => {
    const [file, setfile] = useState(null)
    const[filename,setFilename]=useState('')
    const [progress, setprogress] = useState(0)
    const [toggle, settoggle] = useState(false)
    

    const UploadHandeler = () => {
        settoggle(prestate=>!prestate);
        let filename = file.name.split('.').pop();
        
        let bucketname = '';
        if (filename === 'JPG' || filename === 'jpg' || filename === 'PNG') bucketname = 'image'
        else
            bucketname = 'video';

        const storageref = storage.ref(`${bucketname}/${file.name}`).put(file);
        const firestoreref = db.collection(`${bucketname}`)
        storageref.on('state_changed', (p) => {
            let pro = Math.round((p.bytesTransferred / p.totalBytes) * 200);
            setprogress(pro);

        }, (err) => {
            console.log(err);
        }, () => {
            storageref.snapshot.ref.getDownloadURL().then((url) => {
                const createdAt = new timestamp();
                setfile(null);
                settoggle(prestate=>!prestate);
               
                firestoreref.add({ url, createdAt })
            })

        })
    }

    return (
        <div className='container'>
            <div >
                <label>
                <input style={{display:'none'}} type='file'  onChange={(e) => { setFilename(e.target.files[0].name); setfile(e.target.files[0]) }} />
                <h1>+</h1>
                </label>
                <p>{filename} </p>
               
                <progress className={toggle? 'progressbar active': 'progressbar'} value={progress} max='200'/>
                <br></br>
                <button onClick={UploadHandeler} >Upload</button>
            </div>





        </div>
    );
};

export default Profile;