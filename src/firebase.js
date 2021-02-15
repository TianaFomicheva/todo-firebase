import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAuUpuvQ37kqAQIgG_hcrq_C4hynGw7bRw",
    authDomain: "react-todo-77fcf.firebaseapp.com",
    projectId: "react-todo-77fcf",
    storageBucket: "react-todo-77fcf.appspot.com",
    messagingSenderId: "1025303526780",
    appId: "1:1025303526780:web:90e96df262ee64b1d3b8f9",
    measurementId: "G-82QM3XNDG3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();

export {db }