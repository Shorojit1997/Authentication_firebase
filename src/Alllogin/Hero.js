import React from 'react';
import stylefile from './stylefile.css';

const Hero = ({handleLogout}) => {
    return (
        <div className='hero'>
            <h1>Welcome to our website</h1>
            <button onClick={handleLogout}>Logout</button>

        </div>
    );
};

export default Hero;