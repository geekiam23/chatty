import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';

// Initialize Firebase
   var config = {
     apiKey: "AIzaSyB1L1xuDWKcZSDV8aBMOG3V4oij-Gdy51o",
     authDomain: "chatty-ee9f2.firebaseapp.com",
     databaseURL: "https://chatty-ee9f2.firebaseio.com",
     projectId: "chatty-ee9f2",
     storageBucket: "chatty-ee9f2.appspot.com",
     messagingSenderId: "21438561639"
   };
   firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
