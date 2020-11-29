window.onload = function () {
  var toggleButton = document.querySelector(".toggle-menu");
  var menuMobile = document.querySelector(".menu-mobile");
  toggleButton.addEventListener("click", function () {
    menuMobile.classList.toggle("toggle");
  });
};
