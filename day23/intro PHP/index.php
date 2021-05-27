<?php
    echo 'Hello world from PHP'; 

    $a = 10;

    $b = 20;

    $c = $a + $b;

    var_dump($c);

    $name = 'David';

    $greet = 'Hello';

    echo '<h1>' . $greet . ' ' . $name . '</h1>';

    $myNumber = 14.67;
    var_dump($myNumber);

    $myNumber = round($myNumber); /* This is to round numbers */
    var_dump($myNumber);

    $myNumberTwo = 18.47;
    var_dump($myNumberTwo);

    $myNumberTwo = (integer)$myNumberTwo; /* This only cuts the decimal numbers, it doesn't round */
    var_dump($myNumberTwo);
    echo '<br/>';

    $year = 1950;

    $place = "Mexico";

    $quote = "In $year there was an amazing event in $place";

    echo $quote;

    
?>    