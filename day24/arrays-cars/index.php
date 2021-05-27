<?php

$cars_i_want = [
    "Aston Martin",
    "Bugatti",
    "Ferrari",
    "Lamborghini",
    "Maserati",
    "Mercedes",
    "Porsche",
    "Skoda"
];

echo '<br>';

echo "For myself I would buy $cars_i_want[1]" . "<br>";

echo "For my spouse I would buy $cars_i_want[3]" . "<br>";

$cars_i_want[4] = "Smart";

echo "Each of my kids will get a $cars_i_want[4]" . "<br>";

echo '<ul>';
    foreach($cars_i_want as $car) {
        echo "<li>$car</li>";
    }
echo '</ul>';

$car_prices = [
    'Skoda Octavia' => 270000,
    'Volkswagen Golf' => 170000,
    'BMW X6' => 380000,
    'Porsche 911' => 1150000
];

echo "You can have a $cars_i_want[6] for just " . $car_prices['Porsche 911'] . " CZK <br>";

foreach($car_prices as $car_name => $price) {
    echo "The price of $car_name is $price CZK" . "<br>" ;
}