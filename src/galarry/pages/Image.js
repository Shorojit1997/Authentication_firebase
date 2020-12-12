import React, { useState, useEffect } from 'react';
import { storage, db, timestamp } from '../Config/fire'
import ReactPlayer from 'react-player'
import './cssFile/Images.css'

const Image = () => {

    const [images, setimages] = useState([])

    useEffect(() => {
        const firestoreref = db.collection('image');
        firestoreref.get().then((docfile) => {
            const items = docfile.docs.map((item) => item.data());
            setimages(items);
            console.log(images);
        })
    }, [images.length])
    return (
        <div className='container '>

            {
                images.map((image) => (
                    <div key={image.createdAt} className='card'>
                        <div className="head">
                            <img src={image.url} alt="" />
                            <div>Profile name</div>

                        </div>
                        <div className="body">
                            <img src={image.url} />

                        </div>
                        <div className="footer">
                            <div className="counter">
                                <img src="" alt="" />
                                <p>10</p>
                            </div>
                            <div className="opinion">
                                <button>Like</button>
                                <button>Comment</button>
                                <button>Share</button>

                            </div>

                        </div>
                    </div>

                ))
            }

        </div>
    );
};

export default Image;