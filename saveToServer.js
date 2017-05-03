var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

function saveImage () {
  var data = canvas.toDataURL();
  //you can use DataURIs interchangeably with URLs
  var request = new HMLHttpRequest();
  //readystate is the status of the request. started?not started? fully loaded? loaded?
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200) { //fully loaded and OK
      var response = request.responseText;
      // window.open('download.php?file='+response, '_blank', 'location=0, menubar=0');
      document.getElementById('downloadFrame').src = 'download.php?file='+response;
    }
  }
  request.open('POST', 'save.php', true);
  request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
  request.send('img='+data);
}
