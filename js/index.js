
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
  var db = firebase.firestore();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
     var email = user.email;
     console.log(`User with email ${email} signed in`);
    } else {
      // User is signed out.
      window.location.href = "signin.html";    
    }
  });

  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var row = `<h3>${doc.data().title}</h3><div class="card">
        <img class="card-img-top" src="${doc.data().posterURL}" alt="">
        <div class="card-body">
            <h4 class="card-title">${doc.data().title}(${doc.data().year})</h4>
            <p class="card-text">${doc.data().shotstory}</p>
        </div>
    </div>`
        $("#list").append(row);
    });
});

$(function(){
  document.addEventListener('init', function(event) {
    var page = event.target;
  
    if (page.id === 'profile') {
      Logout();
    }
  });
})

function Logout(){
  $("#signout").click(function(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  })
}
