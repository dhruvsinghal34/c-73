import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBNAj01EHOBU_9lrB6VC4tXgxKBy6graXY",
  authDomain: "library-app-2b724.firebaseapp.com",
  databaseURL: "https://library-app-2b724.firebaseio.com",
  projectId: "library-app-2b724",
  storageBucket: "library-app-2b724.appspot.com",
  messagingSenderId: "738003881243",
  appId: "1:738003881243:web:7d2fa9a04852ab04c9d7be",
  measurementId: "G-TPRR82RWQV"
};
// Initialize Firebase
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


  export default firebase.firestore();
