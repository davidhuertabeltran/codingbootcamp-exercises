<?php

require_once 'data.php';
require_once 'Celebrity.php';

$celebrities = [];

foreach ($data as $record) {
    $celebrity = new Celebrity();
    $celebrity->fill($record);
    $celebrities []= $celebrity;
}
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-type: application/json');
echo json_encode($celebrities);