import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
import RoomList from './components/RoomList.js';
import MessageList from './components/MessageList.js';

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
  constructor(props) {
    super(props);
    this.state = {
      currentRoom: ' --- '
    };
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Welcome to Chatty</h1>
        </header>

        <div className="content">

          <div className="room-list">
            <RoomList firebase={firebase} roomListCallback={this.appCallback} />
          </div>

          <div className="message-header">
            <div className="message-list">
              <p className="message-header">Current Chat Room - {this.state.currentRoom}</p>
                <MessageList firebase={firebase} messageCurrentRoom={this.state.currentRoom} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
