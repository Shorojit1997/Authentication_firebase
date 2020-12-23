import React,{useState} from 'react';
import '../pages/cssFile/UploadForm.css'

const UploadForm = ({file,setfile,progress,setprogress,toggle,settoggle}) => {
    const [filename,setFilename]=useState('')
    
    return (
            <div className='fistdiv'>
                <div className='inputform'>
                    <div className='text'>
                    <h4>Upload Your Picture</h4>
                    </div>
                    <div  className='inputicon'>
                    <input type='file' id='uploadfiles' onChange={(e)=>{setFilename(e.target.files[0].name); setfile(e.target.files[0])}}/> 
                    <label for='uploadfiles'><span>+ </span></label>  
                    </div>
                    <p>{filename}</p>
                    <div className ={toggle? 'bar active':'bar'}>
                    <progress className='progressbar' value={progress} max='200'/>
                    </div>
                    <div className='textedit'><button>{toggle? "Uploading": "Upload"}</button></div>
                   <div className='footer'>
                       <button>Close</button>
                   </div>
                 </div>
                 
                

            </div>

    );
};

export default UploadForm;