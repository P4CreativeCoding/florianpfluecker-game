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
var steeringAngle = 0;
var maxSteeringAngle = 45;
var keys = {};

function update() {
  if (keys[38]) {
    // Up arrow key
    speedY -= acceleration;
    if (keys[38] && speedY !== 0) {
      // Only steer while moving up
      if (keys[37]) {
        // Left arrow key while moving up
        steeringAngle -= 5;
      } else if (keys[39]) {
        // Right arrow key while moving up
        steeringAngle += 5;
      }
    }
  } else if (keys[40]) {
    // Down arrow key
    speedY += acceleration;
    if (keys[40] && speedY !== 0) {
      // Only steer while moving down
      if (keys[37]) {
        // Left arrow key while moving down
        steeringAngle -= 5;
      } else if (keys[39]) {
        // Right arrow key while moving down
        steeringAngle += 5;
      }
    }
  } else {
    if (keys[37]) {
      // Left arrow key while not moving up or down
      speedX -= acceleration;
    } else if (keys[39]) {
      // Right arrow key while not moving up or down
      speedX += acceleration;
    }
  }

  speedX *= friction;
  speedY *= friction;
  carPosX += speedX;
  carPosY += speedY;

  if (carPosX < 0) {
    carPosX = 0;
  }
  if (carPosX + carWidth > containerWidth) {
    carPosX = containerWidth - carWidth;
  }
  if (carPosY < 0) {
    carPosY = 0;
  }
  if (carPosY + carHeight > containerHeight) {
    carPosY = containerHeight - carHeight;
  }

  car.style.left = carPosX + "px";
  car.style.top = carPosY + "px";
  car.style.transform = `translate(-50%, -50%) rotate(${steeringAngle}deg)`; // Das Auto entsprechend der Lenkrichtung drehen

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
