
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
firebase.auth().onAuthStateChanged(function (user) {
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
    if (doc.data().eiei == 1) {
      const result = `

            <div>
            <ons-carousel-item>
                  <img src="${doc.data().posterURL}" style="width:90%;"> 
                  </ons-carousel-item>
              
            </div>`

      $("#gg").append(result)

    }
  });
});
//< ----------------------------------------homepage--------------------------------------------->
db.collection("homepage").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {

    var row1 = `
    
            <ons-carousel-item>
              <img src="${doc.data().posterURL}" width="100%"style="
              height: 395px;"> 
            </ons-carousel-item>
`

    $("#test").append(row1);
  });
});

$(function () {
  document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'profile') {
      Logout();
    }
  });
})

function Logout() {
  $("#signout").click(function () {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
  })
}

document.addEventListener('init', function (event) {
  var page = event.target;
  if (page.id === 'home') {
    getMovieHome()
  }
});
//<=====================================ล่างhomepage======================================>
function getMovieHome() {
  $("#btnCategory button").click(function () {
    $(this).siblings().removeClass('activetype')
    $(this).addClass('activetype');
    $("#gg").empty();

    db.collection("movies").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var i = 1;
        if (doc.data().catagory[0] == $(this).attr("id")) {
          const result = `
                <div>
                   
                      <img src="${doc.data().posterURL}" style="width:90%;height:100%;"> 
                  
                </div>`

          $("#gg").append(result)

        }
      });
    });
  });
};




$("#carouselBig ons-carousel-item").click(function () {
  document.querySelector("#myNavigator_home").pushPage('view/moviedetails.html');
})


function getmovieSearch() {
  console.log($("#searchInput").val());
}



