<?php
    var_dump($_POST);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
        if(isset($_POST['nick']) && strlen($_POST['nick']) > 0):
    ?>
        <h1>Hello <?= $_POST['nick']; ?> </h1>

    <?php endif; ?>

    <form method="post" action="">
        <input type="text" name="nick">
        <input type="submit" name="submit" value="submit">
    </form>
</body>
</html>