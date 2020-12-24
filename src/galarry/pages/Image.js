import React, { useState, useEffect } from 'react';
import { storage, db, timestamp } from '../Config/fire'
import ReactPlayer from 'react-player'
import './cssFile/Images.css'
import like from '../Imagefile/like.png'
import { Helmet } from 'react-helmet'

import { FaRegComment } from 'react-icons/fa';
import { AiFillLike, AiOutlineShareAlt } from 'react-icons/ai';

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
            <Helmet>
                <title>Gallary || Image</title>
            </Helmet>

            {
                images.map((image) => (
                    <div className='mt-3'>
                    <div key={image.createdAt} className='card'>
                        <div className="head">
                            <img src={image.url} alt="" />
                            <div>Profile name</div>

                        </div>
                        <div className="body">
                            <img src={image.url} />

                        </div>
                        <div className="foot">
                            <div className="counter">
                                <img src={like} alt="" />
                                <p>10</p>
                            </div>
                            <div className="opinion">
                                <p><AiFillLike />Like</p>
                                <p><FaRegComment />Comment</p>
                                <p><AiOutlineShareAlt />Share</p>

                            </div>

                        </div>
                    </div>
                    </div>

                ))
            }

        </div>
    );
};

export default Image;