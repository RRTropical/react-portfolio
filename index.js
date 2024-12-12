document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");
  const navBar = document.querySelector(".navBar");
  const menu = hamburger.querySelector("i");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    menu.classList.toggle("fa-bars");
    menu.classList.toggle("fa-x");
    navBar.classList.toggle("active");
  });
});
