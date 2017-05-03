<?php

$data = $_POST['img'];

$data = str_replace('data:image/png;base64,', '', $data);
$data = str_replace('', '+', $data);

$img = base64_decode($data);

$path = 'images/' . uniqid() . '.png';
// put our image file into the path we created
if (file_put_contents($path, $img)) {
  print $path;
} else {
  //error handling must be done before outputting anything else
  header("HTTP/1.1 500 Internal Server Error");
}
?>
