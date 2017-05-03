var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

function saveImage () {
  var data = canvas.toDataURL();
  //you can use DataURIs interchangeably with URLs
  window.open(data, '_blank', 'location=0, menubar=0');
}
