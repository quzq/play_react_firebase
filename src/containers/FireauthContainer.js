import React, { Component } from "react";
import firebase from '../firebase'

// Firebase Authentication

class FireauthContainer extends Component {
    constructor(props){
        super(props);
        this.signInWithGoogle = this.signInWithGoogle.bind(this);
    }

    signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
          });
    }  state = {
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
    //firebase.auth().signInWithRedirect(provider)
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            alert(result)
          });    
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
                <div className="signin_button">
                    <img src="../btn_google_signin.png" onClick={()=>this.signInWithGoogle()} alt="google signin"/>
                </div>        </>
      )
  }
}

export default FireauthContainer
