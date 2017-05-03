var canvas = document.getElementById('drawing');
var context = canvas.getContext('2d');
var r = 10;
window.onload = function() {

var dragging = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function() {
  var image = context.getImageData(0,0,canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.putImageData(image, 0, 0);
}

//resetting the canvas will clear it!
function clearCanvas(canvas) {
  canvas.width = canvas.width;
}


var virtualCanvas = document.createElement('canvas');
var virtualCtx = virtualCanvas.getContext('2d');

context.lineWidth = 2*r;

var putPoint = function(e){
  if (dragging) {
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.arc(e.clientX, e.clientY, r, 0, Math.PI*2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }
}

var engage = function(e) {
  dragging = true;
  putPoint(e);
}

var disengage = function() {
  dragging = false;
  context.beginPath(); //gets rid of final putPoint move
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);


}
