import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { storage, db, timestamp } from '../Config/fire'
import './cssFile/Videos.css'


const Video = () => {
    const [videos, setvideos] = useState([])

    useEffect(() => {
        const firestoreref = db.collection('video');
        firestoreref.get().then((docfile) => {
            const items = docfile.docs.map((item) => item.data());
            setvideos(items);
            // console.log(images);
        })
    }, [videos.length])
    return (
        <div className='container'>

            {
                videos.map((video) =>
                (
                    <div  key={video.createdAt} className='card'>

                        <div className="head">
                            <img src='' alt="" />
                            <div>Profile name</div>
                        </div>
                        <div className='body'>
                            <ReactPlayer width='590px' key={video.createdAt} controls url={video.url} />
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

                )
                )
            }


        </div>
    );
};

export default Video;