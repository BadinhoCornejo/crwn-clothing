import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCl1AuYjTwEqghDDlhwMmu9Zmipxw1v3MA",
  authDomain: "crwn-clothing-ead26.firebaseapp.com",
  databaseURL: "https://crwn-clothing-ead26.firebaseio.com",
  projectId: "crwn-clothing-ead26",
  storageBucket: "crwn-clothing-ead26.appspot.com",
  messagingSenderId: "1072221660365",
  appId: "1:1072221660365:web:e137efd9287299d7e0f584",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
