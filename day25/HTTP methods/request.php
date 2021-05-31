<?php

var_dump($_GET);

echo '<hr/>';

//longest structure using if and else
if (isset($_GET['name'])) {
    var_dump($_GET['name']);
}

//shorter one using ternaary oeprator

$name = isset($_GET['name']) ? $_GET['name'] : null;

//the shortest - and this one is recommended

$name = $_GET['name'] ?? null;

var_dump($_POST);