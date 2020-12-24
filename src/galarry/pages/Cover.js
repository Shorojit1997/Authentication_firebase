import React from 'react';
import './cssFile/Cover.css'
import M from '../Imagefile/sakifa.jpg'
import nesarul from '../Imagefile/nesarul.jpg'
import {FaCamera} from 'react-icons/fa'
import UploadForm from '../Form/UploadForm';

const Cover = (props) => {
    const{modaltoggle,setmodaltoggle}=props;
   const uploadhandeler=()=>{
       setmodaltoggle(prev=>!prev);
       
   }
    return (
        <div className="grandparrent">
            <div className="parrent">

                <div className="cov">
                    <button onClick={uploadhandeler} className='covlable'>Upload Cover Photo</button>
                    <div className="pro">
                        <img src={nesarul} alt="" />
                        <button onClick={uploadhandeler}><FaCamera/></button>
                    </div>
                    <img src={M} alt="Profile Picture" />
                </div>

            </div>

            <div className="name">Sagor Sarkar</div>

        </div>
    );
};

export default Cover;