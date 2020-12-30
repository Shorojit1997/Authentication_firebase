import React from 'react';
import fire from './firebase'

const LoginPage = () => {
  
 const logout=()=>{
  fire.auth().signOut();
 }
    return (
        <div >
            <h1>This is Home Page</h1>
            <button onClick={logout}>Logout</button>
            
        </div>
    );
};

export default LoginPage;