var car = document.getElementById("car");
var container = document.querySelector(".container");
var containerWidth = container.offsetWidth;
var containerHeight = container.offsetHeight;
var carWidth = car.offsetWidth;
var carHeight = car.offsetHeight;
var carPosX = containerWidth / 2 - carWidth / 2;
var carPosY = containerHeight / 2 - carHeight / 2;
var speedX = 0;
var speedY = 0;
var acceleration = 0.2;
var friction = 0.98;
var keys = {};

function update() {
  if (keys[37]) {
    // Left arrow key
    speedX -= acceleration;
  }
  if (keys[38]) {
    // Up arrow key
    speedY -= acceleration;
  }
  if (keys[39]) {
    // Right arrow key
    speedX += acceleration;
  }
  if (keys[40]) {
    // Down arrow key
    speedY += acceleration;
  }

  speedX *= friction;
  speedY *= friction;
  carPosX += speedX;
  carPosY += speedY;

  if (carPosX < 0) {
    carPosX = 0;
  }
  if (carPosY < 0) {
    carPosY = 0;
  }
  if (carPosX + carWidth > containerWidth) {
    carPosX = containerWidth - carWidth;
  }
  if (carPosY + carHeight > containerHeight) {
    carPosY = containerHeight - carHeight;
  }

  car.style.left = carPosX + "px";
  car.style.top = carPosY + "px";
  car.style.transform = `translate(-50%, -50%) rotate(${
    Math.atan2(speedY, speedX) * (180 / Math.PI)
  }deg)`; // Das Auto in die Richtung der Geschwindigkeit drehen

  requestAnimationFrame(update);
}

window.addEventListener("resize", function () {
  containerWidth = container.offsetWidth;
  containerHeight = container.offsetHeight;
});

document.addEventListener("keydown", function (event) {
  keys[event.keyCode] = true;
});

document.addEventListener("keyup", function (event) {
  keys[event.keyCode] = false;
});
