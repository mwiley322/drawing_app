var minRad = 0.5,
maxRad = 80,
defaultRad = 20,
interval = 2,
radSpan = document.getElementById('radVal'),
incRadi = document.getElementById('incRad'),
decRadi = document.getElementById('decRad');

var setRadius = function(newRadius){
  if(newRadius < minRad) {
    newRadius = minRad;
  } else if (newRadius > maxRad) {
    newRadius = maxRad;
  } else {
    r = newRadius;
    context.lineWidth = 2*r;
  }
  radSpan.innerHTML = r;
}


decRad.addEventListener('click', function() {
  setRadius(r-interval);
});
incRad.addEventListener('click', function() {
  setRadius(r+interval);
});

setRadius(defaultRad);
