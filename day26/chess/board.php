<?php

class Board 
{
    public $array;
    public $piece = null;
    
    public function __construct($array)
    {

        $this->array = $array;
    }

    public function populate()
    {
        for($rows = 1; $rows <= 8; $rows++) {
            echo '<div class="row">';
            
            for($column = 1; $column <= 8; $column++) {

                
                if (isset($this->array[$rows][$column])) {
                    $piece = $this->array[$rows][$column];
                } else {
                    $piece = null;
                }

                $newsquare = new Square($rows, $column, $piece);

                echo $newsquare;
        
            }

            echo '</div>';
        }
    }

    public function __toString()
    {
        return $this->populate();
    }

}

