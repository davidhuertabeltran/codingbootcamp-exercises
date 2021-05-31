<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    <div class="board">

        <?php 

            for($row = 0; $row <= 7; $row++){
                echo '<div class="row">';

                
                for($column = 0; $column <= 7; $column++) {
                    

                    if($row % 2 === $column % 2) {
                        echo '<div class="white">';

                        $king = null;
                        if ($row === 7 && $column === 5) {
                            $king = '<img src="king.png">';
                            echo $king;
                        }

                        $queen = null;
                        if ($row === 3 && $column === 1) {
                            $queen = '<img src="queen.png">';
                            echo $queen;
                        }
                        
                        echo '</div>';

                    } else {
                        echo '<div class="black"></div>';
                    }
                }
 

                echo '</div>';
            }


        // //Solution 1 - David
        
        //     for($row = 0; $row <= 7; $row++){

        //         echo '<div class="row">';
        //         if($row % 2) {
        //             for($column = 0; $column <= 3; $column++){
        //                 echo '<div class="black"></div>
        //                 <div class="white"></div>';
        //             }   
        //         } else {
        //             for($column = 0; $column <= 3; $column++){
        //                 echo '<div class="white"></div>
        //                 <div class="black"></div>';
        //             }   
        //         }
                
        //     echo '</div>';
        // }
        ?>
        
    </div>
    
</body>
</html>
