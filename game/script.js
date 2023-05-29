document.addEventListener("keydown", function (event) {
  var car = document.getElementById("car");
  var container = document.querySelector(".container");
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var carWidth = car.offsetWidth;
  var carHeight = car.offsetHeight;
  var carPosX = parseInt(car.style.left) || 0;
  var carPosY = parseInt(car.style.top) || 0;
  var stepSize = 10;

  switch (event.keyCode) {
    case 37: // Left arrow key
      carPosX -= stepSize;
      if (carPosX < 0) {
        carPosX = 0;
      }
      break;
    case 38: // Up arrow key
      carPosY -= stepSize;
      if (carPosY < 0) {
        carPosY = 0;
      }
      break;
    case 39: // Right arrow key
      carPosX += stepSize;
      if (carPosX + carWidth > containerWidth) {
        carPosX = containerWidth - carWidth;
      }
      break;
    case 40: // Down arrow key
      carPosY += stepSize;
      if (carPosY + carHeight > containerHeight) {
        carPosY = containerHeight - carHeight;
      }
      break;
  }

  car.style.left = carPosX + "px";
  car.style.top = carPosY + "px";
});
