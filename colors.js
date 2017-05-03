var colors= ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink'];

for(var i=0, n=colors.length; i<n; i++) {
  var swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}

function setColor(color) {
  context.fillStyle = color;
  context.strokeStyle = color;
  //there will only be one active element at a time
  var active = document.getElementsByClassName('active')[0];
  if (active) {
    active.className = 'swatch';
  }
}

function setSwatch(e) {
  //identify the swatch being clicked
  var swatch = e.target;
  //set colors using OOP
  setColor(swatch.style.backgroundColor);
  //give the active class by appending it
  swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});
