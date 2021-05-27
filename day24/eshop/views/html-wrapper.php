<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>My eshop</title>

    <link rel="stylesheet" href="css/main.css" />

</head>
<body>

    <div id="page">

        <!-- header -->
        <?php include 'header.php';?>

        <!-- topmenu -->
        <?php include 'topmenu.php';?>

        <div id="content">

            <!-- homepage/layout -->
            <?php if($page == "index") {
                include './views/homepage/layout.php';
            } else if($page == "category") {
                include './views/category/layout.php';
            } else {
                include './views/product/layout.php';
            }
            ?>
                

        </div>

        <!-- footer -->
        <?php include 'footer.php';?>

    </div>

</body>
</html>