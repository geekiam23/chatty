import React, { Component } from 'react';


class User extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  };

    login() {
      const provider = new this.props.firebase.auth.GoogleAuthProvider()
      this.props.firebase.auth().signInWithPopup( provider );
    }

    logout() {
      this.props.firebase.auth().signOut();
    }

    componentDidMount() {
      this.props.firebase.auth().onAuthStateChanged( user => {
        this.props.setUser(user);
      });
    }

  render() {
    return (
      <div>
        <button className="user-button" onClick={this.login}>Sign In</button>
        <button className="user-button" onClick={this.logout}>Sign Out</button>
        <p>Current User: {this.props.displayUsername}</p>
      </div>
    )
  }
}

export default User;
