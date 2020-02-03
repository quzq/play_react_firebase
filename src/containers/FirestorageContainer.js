import React, { Component } from "react";
import firebase from '../firebase'

// Cloud Storage 

class FirestorageContainer extends Component {
  constructor(props) {
    super(props);
    this.refFileUpload = React.createRef();
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
    const handleFileChange = async (e) => {
      if (e.target.files[0]) {
        e.persist() // 非同期処理内で参照するeventオブジェクトを永続化
        const storageRef = firebase.storage().ref();
        const files = storageRef.child(`images/${e.target.files[0].name}`)
        await files.put(e.target.files[0])
        if (e.target) e.target.value = "";
      }
    }
    return (
      <>
        <input type="file" ref={this.refFileUpload} onChange={handleFileChange} />
      </>
    )
  }
}

export default FirestorageContainer
