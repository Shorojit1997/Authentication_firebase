import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBGMRgN9Ujkui2RqUKffGcpMy3IFYdVJAg",
    authDomain: "react-firebase-login-c7b8d.firebaseapp.com",
    databaseURL: "https://react-firebase-login-c7b8d.firebaseio.com",
    projectId: "react-firebase-login-c7b8d",
    storageBucket: "react-firebase-login-c7b8d.appspot.com",
    messagingSenderId: "685199072015",
    appId: "1:685199072015:web:b016eb970998ade1f4fc7a"
  };
  // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  var db=fire.firestore();
  export  {db};