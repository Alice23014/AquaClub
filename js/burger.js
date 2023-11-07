document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu__icon");
  const logoIcon = document.querySelector('.header__logo_burger');


  function toggleActiveClass() {
    document.querySelector(".header__wrapper").classList.toggle("active");
    menuIcon.classList.toggle("active");
    logoIcon.classList.toggle("active");
  }

  menuIcon.addEventListener("click", toggleActiveClass);
  logoIcon.addEventListener("click", toggleActiveClass);
});