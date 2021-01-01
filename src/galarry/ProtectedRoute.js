import React,{useState,useEffect} from 'react';
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoute = ({component:Component,modaltoggle,setmodaltoggle,emailverify,isuser,setisUser,...rest}) => {
    return(
        <Route {...rest} render={(props)=>(
            isuser ? <Component {...{isuser,setisUser,modaltoggle,setmodaltoggle,...props}}/>:
            <Redirect 
            to={{
                pathname:'/login',
                state: {from : props.location}
            }}
            />
        )} />
    )
    
    
   

};

export default ProtectedRoute;