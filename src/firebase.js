import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB9rhnD-JqhhjiqeRXcg28JySZvJ8QXam4",
  authDomain: "myproject-3ef0f.firebaseapp.com",
  databaseURL: "https://myproject-3ef0f.firebaseio.com",
  projectId: "myproject-3ef0f",
  storageBucket: "myproject-3ef0f.appspot.com",
  messagingSenderId: "1075511083632",
  appId: "1:1075511083632:web:9f25ec5af97dc4770aeab5",
  measurementId: "G-BHZJT19F5S"
};

firebase.initializeApp(firebaseConfig)
export default firebase 