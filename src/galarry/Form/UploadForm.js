import React, { useState } from 'react';
import '../pages/cssFile/UploadForm.css'

const UploadForm = ({ file, setfile, progress, setprogress, modaltoggle, setmodaltoggle, toggle, settoggle, filename, setFilename, UploadHandeler }) => {

    const handaler = () => {
        if (file != null)
            UploadHandeler();
        else{
            alert('Please Select Your File')
        }
    }

    return (
        <div className='fistdiv'>
            <div className='inputform'>
                <div className='text'>
                    <h4>Upload Your Picture</h4>
                </div>
                <div className='inputicon'>
                    <input type='file' id='uploadfiles' onChange={(e) => { setFilename(e.target.files[0].name); setfile(e.target.files[0]) }} />
                    <label for='uploadfiles'><span>+ </span></label>
                </div>
                <p>{filename}</p>
                {/* <progress className='progressbar' value={progress} max='100'/> */}

                <div className='textedit'><button onClick={handaler} >{toggle ? "Uploading" : "Upload"}</button></div>
                <div className='footer'>
                    <button onClick={() => { setmodaltoggle(prev => !prev) }}>Close</button>
                </div>
            </div>



        </div>

    );
};

export default UploadForm;