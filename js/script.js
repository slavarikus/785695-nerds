
var body = document.querySelector(".body");
var popup = document.querySelector(".modal-window");
var link = document.querySelector(".footer-button");
var close = popup.querySelector(".button-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  body.classList.add("modal-open");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-open");
    body.classList.remove("modal-open");
});
