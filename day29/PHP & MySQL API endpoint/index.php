<?php

require_once 'DB.php';
require_once 'DB_functions.php';
require_once 'Game.php';
require_once 'Genre.php';

$success = connect('localhost', 'games', 'root', '');

// $orderBy = 'name';

// if(isset($_GET['orderby']) && in_array($_GET['orderby'], ['name', 'rating'])){
// 	$orderBy = $_GET['orderby'];	
// } 

// $way = 'asc';

// if(isset($_GET['way']) && in_array($_GET['way'], ['asc', 'desc'])){
// 	$way = $_GET['way'];	
// } 

// $results = select(
//         "SELECT * 
//         FROM `games` 
//         ORDER BY `$orderBy` $way"
// );



$sql = "SELECT * 
        FROM `games` 
        WHERE 1
        ORDER by `name` ASC
";

$games = select($sql, [], 'Game');

//prepare an array of games indexed by their ids
$games_by_ids = [];
foreach ($games as $game)
{
        $games_by_ids[$game->id] = $game;
}

//select all genres
$genres = select("SELECT * FROM `genres`", [], 'Genre');

//prepare an array of genres indexed by their ids
$genres_by_ids = [];
foreach ($genres as $genre)
{
        $genres_by_ids[$genre->id] = $genre;
}

//prepare an array of ids of games
$game_ids = [];
foreach ($games as $game)
{
        $game_ids[] = $game->id;
}

$sql = "SELECT * 
        FROM `game_genre` 
        WHERE `game_id` IN (".join(',', array_fill(0, count($game_ids), '?')).")
";

$game_genres = select($sql, $game_ids);

foreach ($game_genres as $game_genre)
{
        $game = $games_by_ids[$game_genre->game_id];

        $genre = $genres_by_ids[$game_genre->genre_id];

        $game->addGenre($genre);

}

header('Content-type: application/json');

echo json_encode($games);
