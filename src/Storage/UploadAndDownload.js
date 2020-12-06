import React from 'react';
import {useState} from 'react'
import {storage} from '../fire'

const UploadAndDownload = () => {
    const [image, setimage] = useState(null)
    const[porgressitem,setPrgressitem]=useState(0);

    const UploadFile=()=>{
        let storageref=storage.ref(`image/${image.name}`)
        let uploadtask=storageref.put(image);
        uploadtask.on('state_changed',(snap)=>{
            let p=Math.round((snap.bytesTransferred/snap.totalBytes)*100);
            setPrgressitem(p);

        })
    }

    return (
        <div>
            <input type='file' onChange={(e)=>{setimage(e.target.files[0])}} /><br></br>
            <button onClick={UploadFile} >Upload</button><br></br>
            <progress value={porgressitem} max='100'/>
            <button>Show</button><br></br>
            
        </div>
    );
};

export default UploadAndDownload;