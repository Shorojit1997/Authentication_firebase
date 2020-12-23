import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [toggle,setToggle]=useState(false)

  const styles={
    color:'#fff',
       backgroundColor:' #333',
       borderRadius:' 10px',
  }
  const tset=()=>{
    setToggle(!toggle);
  }


  return (
    <div className=''>
    <div  className="navbar">
      <div className="navlogo">Gallary</div>
      <div onClick={tset} className="navicon">
        <div></div>
        <div></div>
        <div></div>
      </div>
  
      <div className="navlist">
        <ul>
          <li>< NavLink activeStyle={styles} exact to="/">Home</ NavLink></li>
          <li>< NavLink activeStyle={styles} to="/image">Image</ NavLink></li>
          <li>< NavLink activeStyle={styles} to="/video">Video</ NavLink></li>
          <li>< NavLink activeStyle={styles} to="/profile">Profile</ NavLink></li>
          <li>< NavLink activeStyle={styles}  to="/logout">Logout</ NavLink></li>
        </ul>
      </div>
      
    </div>
    { toggle?
     (<div className="tg">
             <ul>
          <li>< NavLink activeStyle={styles} exact to="/">Home</ NavLink></li>
          <li>< NavLink activeStyle={styles} to="/image">Image</ NavLink></li>
          <li>< NavLink activeStyle={styles} to="/video">Video</ NavLink></li>
          <li>< NavLink activeStyle={styles} to="/profile">Profile</ NavLink></li>
          <li>< NavLink  to="/logout">Logout</ NavLink></li>
        </ul>
      </div>)
      :(
        <p></p>
      )
}
    </div>
  );
}

export default Navbar;
