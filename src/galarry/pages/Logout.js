import React,{useEffect} from 'react';
import FacebookLogin from 'react-facebook-login'
import { FaBaby } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';
import fire from '../Config/fire';

const Logout = ({isuser,setisUser,...rest}) => {

    useEffect(() => {
       fire.auth().signOut();
    //    setisUser(false);
    })
    return(
        <Redirect to='/login'/>
    )
  
};

export default Logout;