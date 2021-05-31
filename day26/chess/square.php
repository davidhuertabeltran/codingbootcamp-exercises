<?php

class Square 
{
    public $x_coord = null;
    public $Y_coord = null;
    public $piece = null;

    public function __construct($x, $y, $piece)
    {
        $this->x_coord = $x;
        $this->y_coord = $y;
        $this->piece = $piece;
    }

    public function isDark() 
    {

        if ($this->x_coord % 2 == 0 && $this->y_coord % 2 == 0) {
            return false; //if number is even
        } else if ($this->x_coord % 2 > 0 && $this->y_coord % 2 > 0) {
            return false;//if number is odd
        } else {
            return true;
        }

    }

    public function __toString()
    {
        if ($this->isDark() == true) {
            return '<div class="dark">' . new Piece($this->piece) . '</div>';
        }
    
        if ($this->isDark() == false) {
            return '<div class="light">' . new Piece($this->piece) . '</div>';
        }
    }

}