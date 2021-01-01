import React,{useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import fire from '../Config/fire';

const Logout = ({isuser,setisUser,...rest}) => {

    useEffect(() => {
       fire.auth().signOut().then((res)=>{
        setisUser(false);
       });
        
    })
    return(
        <Redirect to='/login'/>
    )
  
};

export default Logout;