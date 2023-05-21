document.addEventListener("DOMContentLoaded", function () {
  var startButton = document.querySelector(".start");
  var score = 0;
  var isCirclePresent = false;
  var scoreDisplay = null;

  startButton.addEventListener("click", function () {
    startButton.remove();
    var aimLabText = document.querySelector(".aimlab-game");
    aimLabText.remove();

    scoreDisplay = document.createElement("div");
    scoreDisplay.classList.add("score-display");
    scoreDisplay.textContent = "Score: 0";
    document.body.appendChild(scoreDisplay);

    document.addEventListener("click", function (event) {
      var clickedElement = event.target;
      if (clickedElement.classList.contains("circle")) {
        clickedElement.remove();
        score++;
        scoreDisplay.textContent = "Score: " + score;
        isCirclePresent = false;
      }
    });

    setInterval(function () {
      if (!isCirclePresent) {
        var circle = createCircle();
        document.body.appendChild(circle);
        isCirclePresent = true;
      }
    }, 500);
  });

  function createCircle() {
    var circle = document.createElement("div");
    circle.classList.add("circle");
  
    var playerDistance = Math.random() * 500 + 100;
    var circleSize = (500 - playerDistance) / 10;
    var minSize = 20;
    circleSize = Math.max(circleSize, minSize);
  
    circle.style.width = circleSize + "px";
    circle.style.height = circleSize + "px";
  
    var xPos = Math.random() * (window.innerWidth - circleSize);
    var yPos = Math.random() * (window.innerHeight - circleSize);
  
    circle.style.left = xPos + "px";
    circle.style.top = yPos + "px";
  
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    circle.style.backgroundColor = randomColor;
  
    return circle;
  }

  function getRandomSize() {
    var minSize = 20;
    var maxSize = 100;
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomPosition(circleSize) {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var randomX = Math.random() * (windowWidth - circleSize);
    var randomY = Math.random() * (windowHeight - circleSize);
    return { x: randomX, y: randomY };
  }
});
