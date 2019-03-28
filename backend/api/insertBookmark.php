<?php
require 'connect.php';

//Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  //Extract the data
  $request = json_decode($postdata);

  //Validate
  if(trim($request->url) === '')
  {
    return http_response_code(400);
  }

  //Sanitize
  $url = mysqli_real_escape_string($con, trim($request->url));

  //Create
  $sql = "INSERT INTO `bookmarks`(`id`,`url`) VALUES (null, '{$url}')";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
    $bookmark =
    [
      'id' => mysqli_insert_id($con),
      'url' => $url
    ];

    echo json_encode(['data'=>$bookmark]);
  }
  else
  {
    http_response_code(422);
  }
}
?>
