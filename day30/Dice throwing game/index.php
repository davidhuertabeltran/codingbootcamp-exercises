<?php

include_once 'Dice.php';
$number_of_dices = $_POST['number'] ?? null; //we add ?? null this is to avoid warnings, because this value doesn't exist yet
$new_sides_dice = $_POST['options'] ?? null;

$new_dice = new Dice($new_sides_dice);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Dice throwing game</title>
</head>
<body>
    <div class="content">

        <form action="" method="post">
            <input type="number" name="number" id="number" placeholder="Write a number">
            <select name="options" id="options">
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <button id="submit" name="button">Submit</button>
        </form>
        <div class="dices">
            <?php
                if($number_of_dices) {
                    for($i = 0; $i < $number_of_dices; $i++) { 
                        echo $new_dice->roll();
                    }
                }
            ?>
        </div>

    </div>
</body>
</html>

