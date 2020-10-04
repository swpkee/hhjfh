$(function(){
    
var firebaseConfig = {
    apiKey: "AIzaSyAX4bG8LAECbQnjo-oxaV-7G4J94SKtA8Y",
    authDomain: "evhub-5dcbf.firebaseapp.com",
    databaseURL: "https://evhub-5dcbf.firebaseio.com",
    projectId: "evhub-5dcbf",
    storageBucket: "evhub-5dcbf.appspot.com",
    messagingSenderId: "737515073348",
    appId: "1:737515073348:web:ceb732de805cf31fe7f111",
    measurementId: "G-ZMV87XC4EW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
     var email = user.email;
     console.log(`User with email ${email} signed in`);
     window.location.href = "index.html";    
    }
  });


  $("#signinemail").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();
console.log(email,password)  
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    $("#errormessage").text(errorMessage)
    
  });
});
$("#signingoogle").click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});
});