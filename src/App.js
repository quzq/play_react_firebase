import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FirestoreContainer from './containers/FirestoreContainer'
import FireauthContainer from './containers/FireauthContainer'
import FirestorageContainer from './containers/FirestorageContainer'
import FirefuncContainer from './containers/FirefuncContainer'

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <FireauthContainer onAuthStateChanged={(user) => { setUser(user) }} user={user}></FireauthContainer>
      <FirestoreContainer></FirestoreContainer>
      <FirestorageContainer></FirestorageContainer>
    </div>
  );
}

export default App;
