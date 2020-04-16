
 import firebase from 'firebase/app'
 import 'firebase/firestore' 
 import 'firebase/storage'

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
  export const fb = firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const dbMenuAdd = db.collection('menuItems');
  export const dbOrders = db.collection('orderItems');
