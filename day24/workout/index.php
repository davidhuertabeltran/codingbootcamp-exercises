<?php

$name = "David";

$birth_month = 11;

$birth_day = 11;

$birth_date = $birth_month . "-" . $birth_day;

var_dump($birth_date);

define("DATE_OF_BIRTH_FORMAT", "m-d");

$today = date(DATE_OF_BIRTH_FORMAT);

var_dump($today);

$birth_year = 1990;

$this_year = date("Y");

$next_year = date("Y") + 1;

$current_age = $this_year - $birth_year;
var_dump($current_age);
echo '<br>';

$new_age = $next_year - $birth_year;

$sentenceCurrentAge = "$name turned $current_age in $this_year "; 

echo $sentenceCurrentAge;
echo '<br>';

$sentenceNewAge = "$name will turn $new_age in $next_year";

echo $sentenceNewAge;
echo '<br>';

function getBirthdaySentence($name, $birth_year, $year) {
    return "In the year $year $name turned " . ($year - $birth_year);
}

for($year = $birth_year; $year <= $this_year; $year++) {
        echo getBirthdaySentence($name, $birth_year, $year) . '<br>';
}



?>