import React, { useState, useEffect } from 'react';
import { db } from '../fire'
import './stylesheet.css'

const ShowGalary = () => {
    const [doc, setdoc] = useState([])
    useEffect(() => {
        const firestorageref = db.collection('images');
        firestorageref.get().then((items) => {
            const item = items.docs.map((docc) => docc.data())
            setdoc(item);
            //  console.log(item)

        })


    }, [doc,setdoc])
   
    return (
        <div className='mt-3'>
            <h1>Welcome to our Image Galarry</h1>
            { doc.map((item) => (
                <div  key={item.createdAt}>
                   
                    <img className='grid_size' src={item.nurl} />

                </div>
            )
            )
            }
        </div>
    );
};

export default ShowGalary;