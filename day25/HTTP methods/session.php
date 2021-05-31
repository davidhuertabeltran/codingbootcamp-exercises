<?php

session_start();

$_SESSION['name'] = 'David';


if( empty( $_SESSION['start'] )) {
    $_SESSION['start'] = date('H:i:s');
}


var_dump($_SESSION);

echo '<hr/>';

echo $_SESSION['name'];