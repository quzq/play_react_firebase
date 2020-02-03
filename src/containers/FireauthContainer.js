import React, { Component } from "react";
import firebase from '../firebase'

// Firebase Authentication

class FireauthContainer extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.onAuthStateChanged(user) 
      this.setState({user})
    })
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout() {
    firebase.auth().signOut()
  }
  
  render(){
      return (
        <>
          <p>
            UID: {this.props.user && this.props.user.uid}
          </p>

          {this.props.user ? (
            <button onClick={this.logout}>Google Logout</button>
          ) : (
              <button onClick={this.login}>Google Login</button>
            )}
        </>
      )
  }
}

export default FireauthContainer
