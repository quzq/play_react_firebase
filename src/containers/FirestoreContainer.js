import React, { Component } from "react";
import firebase from '../firebase'

// Cloud Firestore

const db = firebase.firestore()


class FirestoreContainer extends Component {
  constructor(props){
    super(props)
    this.state={names:[]}
  }
  async componentWillUpdate() {
    const colRef = db.collection("names")
      .limit(10);
    const snapshots = await colRef.get();
    const docs = snapshots.docs.map(doc => doc.data());
    await this.setState({
      names: docs,
    });
  }
  addItem(){
    const docId = db.collection("names").doc().id;
    db.collection("names").doc(docId).set({
      name: (new Date()).toString(),
    });
console.log('add item')
  }
  
  render(){
      return (
        <div>
          <ul>
            {this.state.names.map(i => (
              <li>{i.name}</li>
            ))

            }
          </ul>
          <button onClick={this.addItem}>add </button>
        </div>
      )
  }
}

export default FirestoreContainer
