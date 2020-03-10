import app from "firebase/app";
import firebase from "./";

export const signin = () => {
  const database = firebase.database();
  console.log(database);
  firebase
    .auth()
    .signInAnonymously()
    .then(() => getUser())
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ...
    });
};

export const getUser = () => {
  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     var isAnonymous = user.isAnonymous;
  //     var uid = user.uid;
  //     console.log(isAnonymous, uid);
  //     const data = firebase
  //       .database()
  //       .ref("/songs/")
  //       .once("value")
  //       .then(function(snapshot) {
  //         var title = (snapshot.val() && snapshot.val().title) || "No title";
  //         // ...
  //         console.log(title);
  //       });
  //     console.log(data);
  //     // ...
  //   } else {
  //     // User is signed out.
  //     // ...
  //   }
  //   // ...
  // });
};
