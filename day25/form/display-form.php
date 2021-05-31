<?php
require_once 'display-form-logic.php';
?>

<html>
<head></head>
<body>
<!-- display messages -->
<?php foreach ($messages as $message) : ?>
    <div class="message">
        <?php echo $message; ?>
    </div>
<?php endforeach; ?>
 
<form action="handle-form.php" method="post">
 
    <!-- display the form prefilled with the current data -->
    <input type="text" name="foo" value="<?php echo htmlspecialchars($data['foo']); ?>">
 
    <input type="submit" value="Submit">
 
</form>

</body>
</html>