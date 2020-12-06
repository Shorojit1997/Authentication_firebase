import React from 'react';
import { useState, useEffect } from 'react';
import ShowGalary from './ShowGalary';
import UploadFile from './UploadFile';


const FirstPage = () => {
    const [File, setFile] = useState(null)
    const[progress,setProgress]=useState(0);
    const [toggle,setToggle]=useState(false);

    const handalerUpload=()=>{
        setToggle(!toggle);
    }
  
    return (
        <div>
            <div className="container mt-3">
                <h1>Select Your Image</h1>
                <br></br>
                <input type='file' onChange={(e) => { setFile(e.target.files[0]) }} /><br></br>
                <button onClick={handalerUpload} >Upload</button>
                {progress && <progress value={progress} max='100'/>}
                
                { toggle && <UploadFile file={File} setFile={setFile} progress={progress} setProgress={setProgress}/>}
                <ShowGalary/>
            </div>
        </div>
    );
};

export default FirstPage;