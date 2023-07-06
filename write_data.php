<?php

$unique_uid = $_COOKIE['cookie_unique_id'];
echo $unique_uid;

// get the data from the POST message
$post_data = json_decode(file_get_contents('php://input'), true);
$title = $post_data['title'];
$data = $post_data['filedata'];
// generate a unique ID for the file, e.g., session-6feu833950202
$file = uniqid("session-");
// the directory "data" must be writable by the server
//$name = "./data/{$file}.csv";


$name = "./data/{$unique_uid}.csv";

$fh = fopen($name, 'w');
fwrite($fh, $title."\n".$data."\n");
fclose($fh);

// write the file to disk
//file_put_contents($name, $data);
?>