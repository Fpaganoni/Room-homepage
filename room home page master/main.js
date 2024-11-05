// SLIDER

/* Variables to call */
let backgroundsMobile = document.querySelector(".backgrounds-mobile"),
  backgroundsDesktop = document.querySelector(".backgrounds-desktop"),
  controlRight = document.querySelector(".main_controls_right"),
  controlLeft = document.querySelector(".main_controls_left"),
  containerContent = document.querySelector(".container_contents");

let operacion = 0;

/* Functions for arrows */

let moveToRightImg = () => {
  operacion = operacion + 100;
  if (operacion > 200) {
    operacion = 0;
  }

  containerContent.style.transform = `translate(-${operacion}%)`;
  backgroundsMobile.style.transform = `translate(-${operacion}%)`;
  backgroundsDesktop.style.transform = `translate(-${operacion}%)`;
};

let moveToLeftImg = () => {
  operacion = operacion - 100;
  if (operacion < 0) {
    operacion = 200;
  }

  containerContent.style.transform = `translate(-${operacion}%)`;
  backgroundsMobile.style.transform = `translate(-${operacion}%)`;
  backgroundsDesktop.style.transform = `translate(-${operacion}%)`;
};

/* Listeners for arrows */
controlRight.addEventListener("click", (e) => {
  moveToRightImg();
});

controlLeft.addEventListener("click", (e) => {
  moveToLeftImg();
});
