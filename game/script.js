document.addEventListener("keydown", function (event) {
  var ball = document.getElementById("ball");
  var container = document.querySelector(".container");
  var containerWidth = container.offsetWidth;
  var containerHeight = container.offsetHeight;
  var ballSize = ball.offsetWidth;
  var ballPosX = parseInt(ball.style.left) || 0;
  var ballPosY = parseInt(ball.style.top) || 0;
  var stepSize = 10;

  switch (event.keyCode) {
    case 37: // Left arrow key
      ballPosX -= stepSize;
      if (ballPosX < 0) {
        ballPosX = 0;
      }
      break;
    case 38: // Up arrow key
      ballPosY -= stepSize;
      if (ballPosY < 0) {
        ballPosY = 0;
      }
      break;
    case 39: // Right arrow key
      ballPosX += stepSize;
      if (ballPosX + ballSize > containerWidth) {
        ballPosX = containerWidth - ballSize;
      }
      break;
    case 40: // Down arrow key
      ballPosY += stepSize;
      if (ballPosY + ballSize > containerHeight) {
        ballPosY = containerHeight - ballSize;
      }
      break;
  }

  ball.style.left = ballPosX + "px";
  ball.style.top = ballPosY + "px";
});
