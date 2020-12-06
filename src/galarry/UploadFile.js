import React from 'react';
import { useEffect, useState } from 'react'
import { storage, db ,timestamp} from '../fire'


const UploadFile = ({ file,setFile, progress, setProgress } ) => {

    const uploadTask = () => {
        const storageref = storage.ref(`image/${file.name}`).put(file);
        const firestoreref=db.collection('images');
        storageref.on('state_changed', (snap) => {
            let ongoing = Math.round(snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(ongoing);
        }, (err) => {
            console.log(err.message);
        }, ()=>{
            const url = storageref.snapshot.ref.getDownloadURL().then((nurl)=>{
                const createdAt=new timestamp();
                setFile(null);
                firestoreref.add({nurl,createdAt})
                
            })
        }
        )

    }

    useEffect(() => {
        uploadTask();

    }, [])
    return (
        <div>

        </div>
    )


};

export default UploadFile;