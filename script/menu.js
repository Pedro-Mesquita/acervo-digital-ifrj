
  var toggleButton = document.querySelector(".toggle-menu")
  var menuMobile = document.querySelector(".menu-mobile")
  var blackoutMobile = document.querySelector(".blackout")


  toggleButton.addEventListener("click", function () {
    menuMobile.classList.toggle("toggle")
    //blackoutMobile.classList.toggle("toggle-blackout")
  });

  /*blackoutMobile.addEventListener("click", function(){
    blackoutMobile.classList.remove("toggle-blackout")
    menuMobile.classList.remove("toggle")
  })*/



