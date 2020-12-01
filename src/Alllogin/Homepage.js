import React, { useEffect, useState } from 'react';
import fire from '../fire'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const Homepage = () => {
    const[isSignIn,setIsSignIn]=useState('');

    var uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          // List of OAuth providers supported.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        callbacks:{
            signInSuccess:()=> false
              
        }
      }
      useEffect(()=>{
          fire.auth().onAuthStateChanged(user=>{
                  setIsSignIn({isSignIn:!!user})
              
          })
      },[])
    return (
        <div>
            {
                isSignIn ?( 
                    <>
                    <h1> You are sign in</h1>
                    <button onClick={()=>{console.log('clicked'); fire.auth().signOut()}}>Signout</button>
                    </>
                ):
                (
                    <>
                    <StyledFirebaseAuth
                       uiConfig={uiConfig}
                       firebaseAuth={firebase.auth()}
               
                      />

                    </>
                )
            }
            
            
            
        </div>
    );
};

export default Homepage;