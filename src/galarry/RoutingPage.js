import React from 'react';
import  { BrowserRouter, Switch,Route } from 'react-router-dom'
import Home from './pages/Home'
import Image from './pages/Image'
import Video from './pages/Video'
import Profile from './pages/Profile'
import Navbar from './NavBarcomponets/Navbar'
import Logout from './pages/Logout'



const RoutingPage = () => {
    return (
        <div className=''>
            <BrowserRouter> 
            <Navbar/>
                <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/image' component={Image}/>
                <Route path='/video' component={Video}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/logout' component={Logout}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    );
};

export default RoutingPage;