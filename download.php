<?php

$file = $_GET['file'];
//told PHP its an image
header('Content-type: image/png');
//told PHP its an attachment
header("Content-disposition: attachment; filename=canvasoutput.png");
//spit out file
readfile($file);

?>
