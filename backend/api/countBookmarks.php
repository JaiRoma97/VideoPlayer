<?php

require 'connect.php';

$bookmarks = [];

$sql = "SELECT COUNT(*) FROM bookmarks";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $bookmarks[$i]['url'] = $row['id'];
    &i++;
  }

  echo json_encode($bookmarks);
}
else
{
  http_response_code(404);
}


 ?>
