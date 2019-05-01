import * as firebase from "firebase"


        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyC_2foHl5aSG8Wq1D-inr89sVaBv99AmAg",
        authDomain: "rrrf-40797.firebaseapp.com",
        databaseURL: "https://rrrf-40797.firebaseio.com",
        projectId: "rrrf-40797",
        storageBucket: "",
        messagingSenderId: "307171941277"
      };
      firebase.initializeApp(config);

const database  = firebase.database().ref("/notes")
const auth = firebase.auth(); 
const googleProvider = new firebase.auth.GoogleAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

export { database, auth, googleProvider, twitterProvider};   