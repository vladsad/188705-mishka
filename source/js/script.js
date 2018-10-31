var modal = document.querySelector(".modal");
var modal__overlay = document.querySelector(".modal__overlay");
var order = document.querySelector(".featured__btn");
var main_nav__toggle = document.querySelector(".main-nav__toggle");
var main_nav__list = document.querySelector(".main-nav__list");
var order__autofocus = document.querySelector(".order__label[for='order_size-s']");
var product__btns = document.querySelectorAll(".product__button");

if(order !== null) {
  order.addEventListener("click", function (event) {
    event.preventDefault();
    modal__overlay.classList.add("modal__overlay--show");
    modal.classList.add("modal--show");
    order__autofocus.focus();
  });
}

if(product__btns !==null ) {
  for (var i=0, iLen=product__btns.length; i<iLen; i++) {
    product__btns[i].addEventListener("click", function (event) {
      event.preventDefault();
      modal__overlay.classList.add("modal__overlay--show");
      modal.classList.add("modal--show");
      order__autofocus.focus();
    });
  }
}

if(modal__overlay !==null ) {
  modal__overlay.addEventListener("click", function (event) {
    if (event.target == modal__overlay) {
      modal.classList.remove("modal--show");
      modal__overlay.classList.remove("modal__overlay--show");
    }
  });
}

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

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.classList.toggle("modal--show",false);
    modal__overlay.classList.remove("modal__overlay--show");
  }
});
