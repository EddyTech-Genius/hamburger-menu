const hamburger = document.querySelector(".ham-menu");

const navBar = document.querySelector(".menu");

hamburger.addEventListener("click", function (ev) {
  hamburger.classList.toggle("pressed");
  navBar.classList.toggle("pressed");
});
