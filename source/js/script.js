var modal = document.querySelector(".modal");
var modal__overlay = document.querySelector(".modal__overlay");
var order = document.querySelector(".featured__btn");
var main_nav__toggle = document.querySelector(".main-nav__toggle");
var main_nav__list = document.querySelector(".main-nav__list");

order.addEventListener("click", function (event) {
  event.preventDefault();
  modal__overlay.classList.add("modal__overlay--show");
  modal.classList.add("modal--show");
});

modal__overlay.addEventListener("click", function (event) {
  if (event.target == modal__overlay) {
    modal.classList.remove("modal--show");
    modal__overlay.classList.remove("modal__overlay--show");
  }
});

main_nav__toggle.addEventListener("click", function (event) {
  event.preventDefault();

  if(main_nav__toggle.classList.contains("main-nav__toggle--open")) {
    main_nav__toggle.classList.remove("main-nav__toggle--open");
    main_nav__list.classList.remove("main-nav__list--open");
    return undefined;
  }

  main_nav__toggle.classList.add("main-nav__toggle--open");
  main_nav__list.classList.add("main-nav__list--open");
});
