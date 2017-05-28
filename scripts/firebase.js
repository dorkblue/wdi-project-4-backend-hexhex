// firebase setup
var firebase = require('firebase')

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDmsE7c8pFGoV915pRfQfTD3c29UCm2OLQ',
  authDomain: 'project-hex-hex.firebaseapp.com',
  databaseURL: 'https://project-hex-hex.firebaseio.com',
  projectId: 'project-hex-hex',
  storageBucket: 'project-hex-hex.appspot.com',
  messagingSenderId: '290868166841'
}



module.exports = firebase.initializeApp(config)
