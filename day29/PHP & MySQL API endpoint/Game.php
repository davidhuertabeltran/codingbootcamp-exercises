<?php

require_once 'Genre.php';

class Game
{
    public $id = null;
    public $name = null;
    public $image_url = null;
    public $description = null;
    public $rating = null;
    public $released_at = null;

    public $genres = [];

    public function addGenre(Genre $genre)
    {
        $this->genres[] = $genre;
    }

}