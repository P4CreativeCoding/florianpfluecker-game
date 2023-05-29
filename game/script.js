var car = document.getElementById("car");
var container = document.querySelector(".container");
var containerWidth = container.offsetWidth;
var containerHeight = container.offsetHeight;
var carWidth = car.offsetWidth;
var carHeight = car.offsetHeight;
var carPosX = containerWidth / 2 - carWidth / 2;
var carPosY = containerHeight / 2 - carHeight / 2;
var speedY = 0;
var acceleration = 0.2;
var friction = 0.98;
var keys = {};

function update() {
  if (keys[38]) {
    // Up arrow key
    speedY -= acceleration;
  }
  if (keys[40]) {
    // Down arrow key
    speedY += acceleration;
  }

  speedY *= friction;
  carPosY += speedY;

  if (carPosY < 0) {
    carPosY = 0;
  }
  if (carPosY + carHeight > containerHeight) {
    carPosY = containerHeight - carHeight;
  }

  car.style.top = carPosY + "px";
  car.style.transform = `translate(-50%, -50%) rotate(${
    Math.atan2(speedY, 0) * (180 / Math.PI)
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

update();
