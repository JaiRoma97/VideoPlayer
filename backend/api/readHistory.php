<?php
//Returns the list of videos in the history
require 'connect.php';

$videos = [];

$sql = "SELECT id, url FROM history";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $videos[$i]['id'] = $row['id'];
    $videos[$i]['url'] = $row['url'];
    $i++;
  }

  echo json_encode(['data'=>$videos]);
}
else
{
  http_response_code(404);
}


 ?>
