
 import firebase from 'firebase/app'
 import 'firebase/firestore' 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA77do-cSg2g0VmYfHwudufQdKb3AoUgQQ",
    authDomain: "bagelshop-88b53.firebaseapp.com",
    databaseURL: "https://bagelshop-88b53.firebaseio.com",
    projectId: "bagelshop-88b53",
    storageBucket: "bagelshop-88b53.appspot.com",
    messagingSenderId: "988333951730",
    appId: "1:988333951730:web:5fe9ee2c09a336b9701e6b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const dbMenuAdd = db.collection('menuItems');
