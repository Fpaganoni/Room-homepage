let menuHamburguer = document.querySelector(".nav_hamburguer"),
  main = document.querySelector(".main"),
  iconClose = document.querySelector(".icon_close"),
  nav_links = document.querySelector(".nav_links");

// Function to reset animations

// Listeners to open & close de menu

menuHamburguer.addEventListener("click", () => {
  nav_links.classList.add("open_links");
  main.classList.add("open_menu");
});

iconClose.addEventListener("click", () => {
  nav_links.classList.remove("open_links");
  main.classList.remove("open_menu");
});
