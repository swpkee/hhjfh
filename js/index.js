
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
$(function () {
  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().eiei == 1) {
        const result = `

            <div class="ppp" id="${doc.data().title}">
            <ons-carousel-item>
                  <img src="${doc.data().posterURL}" style="width:90%;height:100%;"> 
                  </ons-carousel-item>
              
            </div>`

        $(".movie_list").append(result)

      }
    });
    $(".ppp").click(function () {

      moviedetial($(this).attr('id'))
      document.querySelector("#myNavigator_home").pushPage('view/moviedetails.html');
    })
  });

});



//------------------------- auto show ---------------------
$(function () {

  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().catagory[0] == "Action" && doc.data().rating > 9) {
        const result = `
      <div class="row" >
      <div class="col-7 text-center" id="recompic">
      <img class="oo" id="${doc.data().title}" src="${doc.data().posterURL}" style="width: 75%;margin-top: 5px;margin-top: 10px;margin-right: 20px;">
    </div>
    <div class="col-5" id="recomdata" style="font-size: 70%;margin-top: 10px;padding-right: 31px;padding-left: 0px;">
      <p style="font-weight: bold;margin-bottom: 10px;font-family: 'Bebas Neue', cursive;font-size:18px">${doc.data().title}</p>
      <div class="deatails" style="font-family: 'Open Sans', sans-serif;">
      ${doc.data().shotstory}
    </div>
      <div class="starrate">
      <ons-icon  icon="fa-star"></ons-icon>
      <ons-icon  icon="fa-star"></ons-icon>
      <ons-icon  icon="fa-star"></ons-icon>
      <ons-icon  icon="fa-star"></ons-icon>
      <ons-icon  icon="fa-star"></ons-icon>
        &nbsp;&nbsp;<b style="font-size:x-large;color: green;">${doc.data().persen}</b>

    </div>
      </div>
      </div>
      
              
            </div>`

        $("#recomlist").append(result)

      }
    });
    $(".oo").click(function () {

      moviedetial($(this).attr('id'))
      document.querySelector("#myNavigator_home").pushPage('view/moviedetails.html');
    })
  });

});

function moviedetial(p) {
  console.log(p);
  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().title == p) {
        if (doc.data().rating > 9) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
    
          &nbsp;&nbsp<b style="font-size:x-large;color:green;text-align: right;">${doc.data().persen}</b>
          `
        }
        else if (doc.data().rating > 7 && doc.data().rating < 9) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
    
          &nbsp;&nbsp<b style="font-size:x-large;color:green;text-align:right;">${doc.data().persen}</b>
          `
        }

        else if (doc.data().rating > 4 && doc.data().rating < 8) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
     
    
          &nbsp;&nbsp<b style="font-size:x-large;color:orange;text-align:right;">${doc.data().persen}</b>
          `
        }

        else if (doc.data().rating > 1 && doc.data().rating < 5) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          &nbsp;&nbsp<b style="font-size:x-large;color:red;text-align:right;">${doc.data().persen}</b>
          `
        }

        const far = ` 
        <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"style="
    height: 250px;">
    <source src="/video/mvhw.mp4" type="video/mp4" />
    </video>
    
      <div class="row ooo" id="${doc.data().title}">
      <div class="col-6 text-center" id="${doc.data().title}">
      <img src="${doc.data().posterURL}" style="width: 75%;margin-top: 20px;margin-top: 10px;margin-right: 20px;">
    </div>
    <div class="col-6" id="${doc.data().title}" style="font-size: 70%;margin-top: 10px;padding-right: 31px;padding-left: 0px;">
      <p style="font-size:18px;margin-bottom: 10px;font-family: 'Bebas Neue', cursive;">${doc.data().title}</p>
      <div class="deatails" style="font-family: 'Open Sans', sans-serif;">
      ${doc.data().shotstory}
    </div>
          `+ rating + `
    </div>
    </div>
 
  `
    $("#moviedetail").append(far);
    



      }


    });
  });

}

//------------------------- auto show ---------------------
function getMovieHome1() {
  $("#btnCategory button").click(function () {
    $(this).siblings().removeClass('activetype')
    $(this).addClass('activetype');
    $("#recomlist").empty();

    db.collection("movies").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().catagory[0] == $(this).attr("id") && doc.data().rating > 9) {

          //function star ------------------------------------------------------------------------

          if (doc.data().rating > 9) {
            var rating = `
            <div class="starrate">
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
      
            &nbsp;&nbsp<b style="font-size:x-large;color:green;text-align: right;">${doc.data().persen}</b>
            `
          }
          else if (doc.data().rating > 7 && doc.data().rating < 9) {
            var rating = `
            <div class="starrate">
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
      
            &nbsp;&nbsp<b style="font-size:x-large;color:green;text-align: right;">${doc.data().persen}</b>
            `
          }

          else if (doc.data().rating > 4 && doc.data().rating < 8) {
            var rating = `
            <div class="starrate">
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
            
      
            &nbsp;&nbsp<b style="font-size:x-large;color:green;text-align: right;">${doc.data().persen}</b>
            `
          }

          else if (doc.data().rating > 1 && doc.data().rating < 5) {
            var rating = `
            <div class="starrate">
            <ons-icon  icon="fa-star"></ons-icon>
            <ons-icon  icon="fa-star"></ons-icon>
            &nbsp;&nbsp<b style="font-size:x-large;color:green;text-align: right;">${doc.data().persen}</b>
            `
          }

          const resultrecom = `
      <div class="row ooo" id="${doc.data().title}">
      <div class="col-7 text-center" id="${doc.data().title}">
      <img src="${doc.data().posterURL}" style="width: 75%;margin-top: 20px;margin-top: 10px;margin-right: 20px;">
    </div>
    <div class="col-5" id="${doc.data().title}" style="font-size: 70%;margin-top: 10px;padding-right: 31px;padding-left: 0px;">
      <p style="font-size:18px;margin-bottom: 10px;font-family: 'Bebas Neue', cursive;">${doc.data().title}</p>
      <div class="deatails" style="font-family: 'Open Sans', sans-serif;">
      ${doc.data().shotstory}
    </div>
          `+ rating + `
    </div>`

          $("#recomlist").append(resultrecom)

        }
      });
      $(".ooo").click(function () {
        moviedetial($(this).attr('id'))
        document.querySelector("#myNavigator_home").pushPage('view/moviedetails.html');
      })
    });

  })
};

//< ----------------------------------------homepage--------------------------------------------->
// db.collection("recommend").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {

//     var row1 = `

//             <ons-carousel-item class"bb" id="${doc.data().title}">
//             <video id="videoBG" style="width:100%;height:auto;"  autoplay muted loop><source src="${doc.data().posterURL}" type="video/mp4">

//             </ons-carousel-item>
// `

//     $("#test").append(row1);
//   });
// });

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
    getMovieHome1()

  }
});
//<=====================================ล่างhomepage======================================>
function getMovieHome() {
  $("#btnCategory button").click(function () {
    $(this).siblings().removeClass('activetype')
    $(this).addClass('activetype');
    $(".movie_list").empty();

    db.collection("movies").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().catagory[0] == $(this).attr("id")) {
          const result = `
          
          <div class="pppp" id="${doc.data().title}">
          <ons-carousel-item>
                <img src="${doc.data().posterURL}" style="width:90%;height:100%;"> 
                </ons-carousel-item>
            
          </div>`


          $(".movie_list").append(result)

        }


      });
      $(".pppp").click(function () {
        moviedetial($(this).attr('id'))
        document.querySelector("#myNavigator_home").pushPage('view/moviedetails.html');
      })
    });
  });




  // $("#carouselBig ons-carousel-item video").click(function () {
  //   document.querySelector("#myNavigator_home").pushPage('view/moviedetails.html');
  // })
};











function getmoviefromSearch() {
  const searchText = $("#searchInput").val()
  const newsearchText = searchText.replace(/ /g, "");
  $("#searchItem").empty();
  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      const titlemovie = doc.data().title;
      const newtitleMovie = titlemovie.replace(/ /g, "");
      console.log(newtitleMovie);
      if (newtitleMovie.toLowerCase().indexOf(newsearchText.toLowerCase()) != -1) {
        if (doc.data().rating > 9) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
    
           <b style="font-size:x-large;color:green;text-align: right;">${doc.data().persen}</b>
          `
        }
        else if (doc.data().rating >= 7 && doc.data().rating < 9) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
    
          <b style="font-size:x-large;color:green;text-align:right;">${doc.data().persen}</b>
          `
        }

        else if (doc.data().rating >= 4 && doc.data().rating < 7) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
     
    
          <b style="font-size:x-large;color:orange;text-align:right;">${doc.data().persen}</b>
          `
        }

        else if (doc.data().rating > 1 && doc.data().rating < 5) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
            <b style="font-size:x-large;color:red;text-align:right;">${doc.data().persen}</b>
          `
        }

        const eiei = `
        <ons-row class="rowmagin se" id="${doc.data().title}"> 
        <ons-col>
        <img src="${doc.data().posterURL}" style="width:90%;height:95%;">
           </div>
        </ons-col>
        <ons-col>
              <span class="list-item__title" style="font-family: 'Bebas Neue', cursive;font-size:18px;">${doc.data().title}</span><br>
              <span class="list-item__subtitle" style="font-family: 'Open Sans', sans-serif;font-size:12px;">"${doc.data().shotstory}"
                </span>
                 <p class="rating">Ratings</p>
                 `+ rating + `
              </ons-col>
      </ons-row>`
        console.log(doc.data());
        $("#searchItem").append(eiei)
      }
    });
    $(".se").click(function () {
      moviedetial($(this).attr('id'))
      document.querySelector("#myNavigator_search").pushPage('view/moviedetails.html');
    })
  });

}

$(function () {
  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().rating > 1) {
        if (doc.data().rating > 9) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
    
           <b style="font-size:x-large;color:green;text-align: right;">${doc.data().persen}</b>
          `
        }
        else if (doc.data().rating >= 7 && doc.data().rating < 9) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
    
          <b style="font-size:x-large;color:green;text-align:right;">${doc.data().persen}</b>
          `
        }

        else if (doc.data().rating >= 4 && doc.data().rating < 7) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
     
    
          <b style="font-size:x-large;color:orange;text-align:right;">${doc.data().persen}</b>
          `
        }

        else if (doc.data().rating > 1 && doc.data().rating < 5) {
          var rating = `
          <div class="starrate">
          <ons-icon  icon="fa-star"></ons-icon>
          <ons-icon  icon="fa-star"></ons-icon>
            <b style="font-size:x-large;color:red;text-align:right;">${doc.data().persen}</b>
          `
        }

        const result = `
        <ons-row class="rowmagin vvv" id="${doc.data().title}"> 
        <ons-col>
        <img src="${doc.data().posterURL}" style="width:90%;height:95%;">
           </div>
        </ons-col>
        <ons-col>
              <span class="list-item__title" style="font-family: 'Bebas Neue', cursive;font-size:18px;">${doc.data().title}</span><br>
              <span class="list-item__subtitle" style="font-family: 'Open Sans', sans-serif;font-size:12px;">"${doc.data().shotstory}"
                </span>
                 <p class="rating">Ratings</p>
                 `+ rating + `
              </ons-col>
      </ons-row>`
        $("#searchItem").append(result)

      }
    });
    $(".vvv").click(function () {

      moviedetial($(this).attr('id'))
      document.querySelector("#myNavigator_search").pushPage('view/moviedetails.html');
    })
  });

});
$(function () {
  db.collection("movies").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const result1 =`
<ons-carousel-item>
          <video id="videoBG" style="width:100%;height:auto;" autoplay muted loop>
            <source src="/video/mvstr.mp4" type="video/mp4">
        </ons-carousel-item>
        <ons-carousel-item>
          <video id="videoB" style="width:100%;height:auto;" autoplay muted loop>
            <source src="/video/mvhw.mp4" type="video/mp4">
        </ons-carousel-item>
        <ons-carousel-item>
          <video id="video" style="width:100%;height:auto;" autoplay muted loop>
            <source src="/video/ted.mp4" type="video/mp4">
        </ons-carousel-item>
        `
        $('#carouselBig').append(result1)
      })
    });
  
  });