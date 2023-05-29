document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

var acceleration = 0.2; // Beschleunigung des Autos
var deceleration = -0.2; // Bremsen des Autos
var maxSpeed = 5; // Maximale Geschwindigkeit des Autos

var speedX = 0; // Geschwindigkeit des Autos in horizontaler Richtung
var speedY = 0; // Geschwindigkeit des Autos in vertikaler Richtung

function handleKeyDown(event) {
  var key = event.key;

  if (key === "ArrowUp") {
    accelerateUp();
  } else if (key === "ArrowDown") {
    accelerateDown();
  } else if (key === "ArrowLeft") {
    accelerateLeft();
  } else if (key === "ArrowRight") {
    accelerateRight();
  }
}

function handleKeyUp(event) {
  var key = event.key;

  if (key === "ArrowUp" || key === "ArrowDown") {
    stopVertical();
  } else if (key === "ArrowLeft" || key === "ArrowRight") {
    stopHorizontal();
  }
}

function accelerateUp() {
  speedY -= acceleration;
  if (speedY < -maxSpeed) {
    speedY = -maxSpeed;
  }
}

function accelerateDown() {
  speedY += acceleration;
  if (speedY > maxSpeed) {
    speedY = maxSpeed;
  }
}

function accelerateLeft() {
  speedX -= acceleration;
  if (speedX < -maxSpeed) {
    speedX = -maxSpeed;
  }
}

function accelerateRight() {
  speedX += acceleration;
  if (speedX > maxSpeed) {
    speedX = maxSpeed;
  }
}

function stopVertical() {
  if (speedY > 0) {
    speedY += deceleration;
    if (speedY < 0) {
      speedY = 0;
    }
  } else if (speedY < 0) {
    speedY -= deceleration;
    if (speedY > 0) {
      speedY = 0;
    }
  }
}

function stopHorizontal() {
  if (speedX > 0) {
    speedX += deceleration;
    if (speedX < 0) {
      speedX = 0;
    }
  } else if (speedX < 0) {
    speedX -= deceleration;
    if (speedX > 0) {
      speedX = 0;
    }
  }
}

function updatePosition() {
  var auto = document.getElementById("auto");
  var currentTop = parseInt(auto.style.top) || 0;
  var currentLeft = parseInt(auto.style.left) || 0;
  
  var newTop = currentTop + speedY;
  var newLeft = currentLeft + speedX;
  
