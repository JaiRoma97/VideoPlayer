<?php
require 'connect.php'

$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mymsqli_real_escape_string($con, (int)$_GET['id']) : false

if(!$id)
{
  return http_response_code(400);
}

//Delete
$sql = "DELETE FROM 'bookmarks' WHERE 'id' = '{$id}' LIMIT 1"

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}

?>
