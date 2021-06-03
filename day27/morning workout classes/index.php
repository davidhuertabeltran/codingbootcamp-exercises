<?php
require_once 'computer.php';

$my_computer = new Computer;

$my_computer->model = 'Asus ROG';
$my_computer->operating_system = 'Windows 10';
$my_computer->is_portable = false;
$my_computer->status = 'on';

$my_computer->switchOff();
$my_computer->toggleSwitch();
$my_computer->toggleSwitch();
$my_computer->toggleSwitch();


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 27 Morning Workout</title>
</head>
<body>

    <h1>My computer</h1>
    <table>
        <tr><th>Model:</th><td><?= $my_computer->model ?></td>
        <tr><th>OS:</th><td><?= $my_computer->operating_system ?></td>
        <tr><th>Portable:</th><td><?= $my_computer->is_portable ? 'yes' : 'no' ?></td>
        <tr><th>Status:</th><td><?= 'switched ' . $my_computer->status ?></td>
    </table>

</body>
</html>