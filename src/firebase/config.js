import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDXvG-6OvFY20aydsD4DVi3Qs7wdw9KWag",
    authDomain: "olx-clone-bc68b.firebaseapp.com",
    projectId: "olx-clone-bc68b",
    storageBucket: "olx-clone-bc68b.appspot.com",
    messagingSenderId: "438321452696",
    appId: "1:438321452696:web:9af158e9e7eba095da62ed",
    measurementId: "G-HY8103GBX3"
  };


export default firebase.initializeApp(firebaseConfig)