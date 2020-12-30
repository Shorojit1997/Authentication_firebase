import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Image from './pages/Image'
import Video from './pages/Video'
import Profile from './pages/Profile'
import Navbar from './NavBarcomponets/Navbar'
import Logout from './pages/Logout'
import Login from './LoginPage/Login'
import Signup from './LoginPage/Signup'
import ProtectedRoute from './ProtectedRoute'
import fire from './Config/fire'
import Verified_email from './LoginPage/Verified_email';



const RoutingPage = (props) => {
    const{modaltoggle,setmodaltoggle}=props;
    const [isuser, setisUser] = useState(false);
    const[emailverify,setemailverity]=useState(false);

    useEffect(() => {
       fire.auth().onAuthStateChanged((user)=>{
           if(user.emailVerified)
              setemailverity(true);
           if(user)
             setisUser(true);
            else
            setisUser(false);
       })
    })

    return (
        <div >{

            <BrowserRouter>
                {
                    isuser ? <Navbar /> : null
                }
                <Switch>
                    <ProtectedRoute exact path='/' component={Home} {...{emailverify,isuser,setisUser,...props}}/>
                    <ProtectedRoute exact path='/image' component={Image} {...{emailverify,isuser,setisUser,...props}}/>
                    <ProtectedRoute exact path='/video' component={Video} {...{emailverify,isuser,setisUser,...props}}/>
                    <ProtectedRoute exact path='/profile'  component={Profile}  {...{emailverify,isuser,setisUser,...props}}  />
                    <ProtectedRoute exact path='/logout' component={Logout} {...{emailverify,isuser,setisUser,...props}} />
                    <Route exact path='/login' component={Login} {...{emailverify,isuser,setisUser,...props}}/>
                    <Route exact path='/sign_up' component={Signup} {...{emailverify,isuser,setisUser,...props}}/>
                    <Route exact path='/verified_email' component={Verified_email} {...{emailverify,isuser,setisUser,...props}}/>
                </Switch>
            </BrowserRouter>



        }

        </div>
    );
};

export default RoutingPage;