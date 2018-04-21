import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.js'
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAGlwyHe5FS9rGQETEYWZKbhA-GBY6LjIw",
  authDomain: "city-lights.firebaseapp.com",
  databaseURL: "https://city-lights.firebaseio.com/",
  projectId: "city-lights",
  storageBucket: "city-lights.appspot.com",
  messagingSenderId: "1928021175"
};
firebase.initializeApp(config);

//Assigns URL routes
ReactDOM.render(<App/>,document.getElementById('root'));