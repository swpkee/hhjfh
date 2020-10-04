var prev = function() {
    var carousel = document.getElementById('carousel');
    carousel.prev();
  };
  
  var next = function() {
    var carousel = document.getElementById('carousel');
    carousel.next();
  };
  
  ons.ready(function() {
    var carousel = document.addEventListener('postchange', function(event) {
      console.log('Changed to ' + event.activeIndex)
    });
  });

  document.addEventListener('init', function (event) {
    var page = event.target;

    if (page.id === 'home') {

      console.log("i");

      page.querySelector('#movie1').onclick = function () {
        console.log("i");
        document.querySelector('#myNavigator').pushPage('view/moviedetails.html');
      };
    } 

    if (page.id === 'home') {

      console.log("ii");

      page.querySelector('#movie2').onclick = function () {
        console.log("ii");
        document.querySelector('#myNavigator').pushPage('view/moviedetails.html');
      };
    } 

    if (page.id === 'home') {

      console.log("iii");

      page.querySelector('#movie3').onclick = function () {
        console.log("iii");
        document.querySelector('#myNavigator').pushPage('view/moviedetails.html');
      };
    } 
  });

  
  