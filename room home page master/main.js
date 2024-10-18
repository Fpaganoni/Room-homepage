// SLIDER

/* Variables to call */
let backgroundsMobile = document.querySelector(".backgrounds-mobile");
let backgroundsDesktop = document.querySelector(".backgrounds-desktop");
let controlRight = document.querySelector(".main_controls_right");
let controlLeft = document.querySelector(".main_controls_left");

let operacion = 0;

/* Functions for arrows */

let moveToRight = () => {
  operacion = operacion + 100;
  if (operacion > 200) {
    operacion = 0;
  }

  backgroundsMobile.style.transform = `translate(-${operacion}%)`;
  backgroundsDesktop.style.transform = `translate(-${operacion}%)`;
};

let moveToLeft = () => {
  operacion = operacion - 100;
  if (operacion < 0) {
    operacion = 200;
  }

  backgroundsMobile.style.transform = `translate(-${operacion}%)`;
  backgroundsDesktop.style.transform = `translate(-${operacion}%)`;
};

/* Listeners for arrows */
controlRight.addEventListener("click", (e) => {
  moveToRight();
});

controlLeft.addEventListener("click", (e) => {
  moveToLeft();
  console.log("click");
});
