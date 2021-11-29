import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJGYt0uW1NcP2Lgc68VAb1XB627-DRJPA",
  authDomain: "speak-up-a55d2.firebaseapp.com",
  projectId: "speak-up-a55d2",
  storageBucket: "speak-up-a55d2.appspot.com",
  messagingSenderId: "894542815939",
  appId: "1:894542815939:web:1419b62d69be0823603876",
  measurementId: "G-3ZGMLYWMBX"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const storage = firebase.storage();

export { auth, provider, twitterProvider, storage };
export default db;
