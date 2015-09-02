var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var block = {
  width: 20,
  height: 20,
  x: 190,
  y: 140,
};

var keyCodeFunctionMapper = {
  37: function() { block.x -= 5},
  38: function() { block.y -= 5},
  39: function() { block.x += 5},
  40: function() { block.y += 5}
};

document.addEventListener('keydown', function (event) {
  var keyCode = event.keyCode;
  if (keyCodeFunctionMapper[keyCode]) {
    keyCodeFunctionMapper[keyCode]();
  }
});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(block.x, block.y, block.width, block.height);
  requestAnimationFrame(gameLoop);
});
