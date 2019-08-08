import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCDVad5q42IHqQKQihygcE1GmgrbvdNufY",
  authDomain: "camagry-d9c63.firebaseapp.com",
  databaseURL: "https://camagry-d9c63.firebaseio.com",
  projectId: "camagry-d9c63",
  storageBucket: "",
  messagingSenderId: "488924421518",
  appId: "1:488924421518:web:52a730ef1bc920b5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;