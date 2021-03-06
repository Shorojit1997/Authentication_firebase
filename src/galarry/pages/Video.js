import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { db } from '../Config/fire'
import './cssFile/Videos.css'
import like from '../Imagefile/like.png'
//icon
import  {FaRegComment} from 'react-icons/fa';
import  {AiFillLike,AiOutlineShareAlt} from 'react-icons/ai';
import { Helmet } from 'react-helmet'

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
            <Helmet>
                <title>Gallary || Video</title>
            </Helmet>

            {
                videos.map((video) =>
                (
                    <div  key={video.createdAt} className='card'>

                        <div className="head">
                            <img src='' alt="" />
                            <div>Profile name</div>
                        </div>
                        <div className='body'>
                            <ReactPlayer width='585px' key={video.createdAt} controls url={video.url} />
                        </div>

                        <div className="foot">
                            <div className="counter">
                                <img src={like} alt="" />
                                <p>10</p>
                            </div>
                            <div className="opinion">
                                <p><AiFillLike/>Like</p>
                                <p ><FaRegComment/>Comment</p>
                                <p ><AiOutlineShareAlt/>Share</p>
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