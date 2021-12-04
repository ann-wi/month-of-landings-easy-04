const page = document.querySelector(".page");
const navPopup = page.querySelector(".pop-up-nav");

const burgerButton = page.querySelector(".header__burger");
const navPopUpCloseButton = page.querySelector(".pop-up-nav__close-button");

burgerButton.addEventListener("click", function () {
  navPopup.classList.add("pop-up-nav_opened");
});

navPopUpCloseButton.addEventListener("click", function () {
  navPopup.classList.remove("pop-up-nav_opened");
});
