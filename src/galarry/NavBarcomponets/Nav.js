import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/image'>Image</NavLink>
            <NavLink exact to='/video'>Video</NavLink>
            <NavLink exact to='/profile'>Profile</NavLink>
            
        </div>
    );
};

export default Nav;