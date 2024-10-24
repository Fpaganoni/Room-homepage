let menuHamburguer = document.querySelector(".nav_hamburguer"),
  main = document.querySelector(".main"),
  iconClose = document.querySelector(".icon_close"),
  main_nav = document.querySelector(".main_nav");

menuHamburguer.addEventListener("click", () => {
  main.classList.toggle("open_menu");
});

iconClose.addEventListener("click", () => {
  main.classList.remove("open_menu");
});
