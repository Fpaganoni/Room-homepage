let menuHamburguer = document.querySelector(".nav_hamburguer");
let main = document.querySelector(".main");
let iconClose = document.querySelector(".icon_close");

menuHamburguer.addEventListener("click", () => {
  main.classList.toggle("open_menu");
});

iconClose.addEventListener("click", () => {
  main.classList.remove("open_menu");
});
