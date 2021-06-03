<?php



try {
    $connection = new PDO(
        'mysql:dbname=world;host=localhost;charset=utf8', 
        'root',
        ''
    );
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

var_dump($connection);

$sql = "
    SELECT *
    FROM `countries`
    WHERE `population` > 20000000
    ORDER BY `population` ASC
    LIMIT 10
";

$statement = $connection->prepare($sql);

var_dump($statement);


$statement->execute(); //Execute the statement



$next_result = $statement->fetch();

var_dump($next_result);

$all_results = $statement->fetchAll();

var_dump($all_results);

