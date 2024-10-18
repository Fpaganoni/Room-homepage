// let img1 = document.querySelector(".img1");
// let img2 = document.querySelector(".img2");
// let img3 = document.querySelector(".img3");

//
// let backgroundContainer = document.querySelector(".background-container");

// controlRight.addEventListener("click", () => {
//   if ((img2.style.transform = "translate(-100%)")) {
//     img3.style.transform = "translate(-200%)";
//   }
// });

// controlRight.addEventListener("click", () => {
//   if ((img1.style.transform = "translate(0)" || "")) {
//     img2.style.transform = "translate(-100%)";
//   }
// });

/* Variables to call */

let backgrounds = document.querySelector(".backgrounds-mobile");
let controlRight = document.querySelector(".main_controls_right");
let controlLeft = document.querySelector(".main_controls_left");

let operacion = 0;

/* Functions for arrows */

let moveToRight = () => {
  operacion = operacion + 100;
  if (operacion > 200) {
    operacion = 0;
  }
  backgrounds.style.transform = `translate(-${operacion}%)`;
};

let moveToLeft = () => {
  operacion = operacion - 100;
  if (operacion < 0) {
    operacion = 200;
  }

  backgrounds.style.transform = `translate(-${operacion}%)`;
};

/* Listeners for arrows */
controlRight.addEventListener("click", (e) => {
  moveToRight();
});

controlLeft.addEventListener("click", (e) => {
  moveToLeft();
  console.log("click");
});
