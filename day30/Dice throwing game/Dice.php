<?php

class Dice 
{
    // public $sides = 6;
    public $number = null;

    function __construct($sides)
    {
        $this->sides = $sides;
    }

    public function roll()
    {
        $this->number = rand(1, $this->sides);
        return '<div class="dice">' . $this->number . '</div>';
    }

    function toString()
    {
        return $this->number;
    }
}