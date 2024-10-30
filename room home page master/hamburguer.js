let menuHamburguer = document.querySelector(".nav_hamburguer"),
  main = document.querySelector(".main"),
  iconClose = document.querySelector(".icon_close"),
  main_nav = document.querySelector(".main_nav"),
  nav_links = document.querySelector(".nav_links");

// Function to reset animations

let resetAnimation = (el) => {
  el.classList.remove("open_links", "close_links");
  return el.offsetWidth;
};

// Listeners to open & close de menu

menuHamburguer.addEventListener("click", () => {
  resetAnimation(nav_links);
  nav_links.classList.add("open_links");
  nav_links.classList.remove(".close_links");
  main.classList.add("open_menu");
});

iconClose.addEventListener("click", () => {
  resetAnimation(nav_links);
  nav_links.classList.remove("open_links");
  nav_links.classList.add(".close_links");
  main.classList.remove("open_menu");
});
