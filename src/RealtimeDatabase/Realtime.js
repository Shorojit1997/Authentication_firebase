import React from 'react';
import fire from '../fire'
import {useState} from 'react'

const Realtime = () => {
   const [name, setName] = useState('');
   const [userid, setuserid] = useState('');
   const [picture, setPicture] = useState([]);
   const [Item, setItem] = useState({})

   const [Username, setUsername] = useState('')
   
   const clear=()=>{
       setName('');
       setuserid('');
       setPicture([])
   }

   const sendtext=()=>{
     // const messageref=fire.database().ref('message').orderByKey().limitToLast;
       fire.database().ref(name).set({
           username:name,
           userid:userid,
           pictureurl:picture,

       })
       clear();
   }
   const getData=()=>{
       fire.database().ref(Username).on('value',snap=>{
           setItem(snap.val())
           console.log(snap.val());
           
       })
      
   }


    return (
        <div>
            <br></br>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
            <input type='text' value={userid} onChange={(e)=>{setuserid(e.target.value)}}/><br></br>
            <input type='file' value={picture} onChange={(e)=>{setPicture(e.target.value)}}/><br></br>
            <button onClick={sendtext}>add into realtime database</button><br></br><br></br>
            <input type='text' value={Username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='enter name...'/><br></br>

            <button onClick={getData} >Fetch data</button>
            {
                <div style={{float:'left'}}>

               <h1 id='firsttext'>Name: {Item.username}</h1>
               <h1>Id: {Item.userid}</h1>
               
               <img id='imagefile'/>
               
               </div>
            }
           
            
            
            
        </div>
    );
};

export default Realtime;