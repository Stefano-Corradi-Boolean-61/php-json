<?php

$user = [
  'firstname' => 'Ugo',
  'lastname' => 'De Ughi',
  'age' => 30
];

	
header('Content-Type: application/json');

echo json_encode($user);

