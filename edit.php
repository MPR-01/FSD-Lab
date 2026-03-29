<?php
include 'db.php';

$id = $_GET['id'];

// FETCH EXISTING DATA
$result = $conn->query("SELECT * FROM student WHERE id=$id");
$row = $result->fetch_assoc();

// UPDATE DATA
if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $department = $_POST['department'];

    $sql = "UPDATE student SET 
            name='$name',
            email='$email',
            mobile='$mobile',
            department='$department'
            WHERE id=$id";

    $conn->query($sql);

    header("Location: index.php");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Student</title>
</head>
<body>

<h2>Edit Student</h2>

<form method="POST">
    Name: <input type="text" name="name" value="<?= $row['name'] ?>"><br><br>
    Email: <input type="email" name="email" value="<?= $row['email'] ?>"><br><br>
    Mobile: <input type="text" name="mobile" value="<?= $row['mobile'] ?>"><br><br>
    Department: <input type="text" name="department" value="<?= $row['department'] ?>"><br><br>

    <button type="submit" name="update">Update</button>
</form>

</body>
</html>