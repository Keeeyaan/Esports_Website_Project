const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const hamenu = document.querySelector(".header-hamenu");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
    hamenu.classList.remove('fade-in');
    hamenu.classList.add('fade-out');
    body.classList.remove("scrollLock");
  } else {
    header.classList.add("open");  
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    body.classList.add("scrollLock");
    hamenu.classList.remove('fade-out');
    hamenu.classList.add('fade-in');
  }
});