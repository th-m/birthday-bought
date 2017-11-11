import firebase from 'firebase'

const config = {
   apiKey: "AIzaSyAjSKA0Ti0_X4A5XQhcaVh68lu08waEniM",
   authDomain: "birthday-buyer.firebaseapp.com",
   databaseURL: "https://birthday-buyer.firebaseio.com",
   projectId: "birthday-buyer",
   storageBucket: "birthday-buyer.appspot.com",
   messagingSenderId: "917872359554"
 };

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
