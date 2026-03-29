<?php include 'db.php'; ?>

<?php
// INSERT DATA
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $department = $_POST['department'];

    $sql = "INSERT INTO student (name, email, mobile, department)
            VALUES ('$name', '$email', '$mobile', '$department')";
    $conn->query($sql);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
</head>
<body>

<h2>Add Student</h2>
<form method="POST">
    Name: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email"><br><br>
    Mobile: <input type="text" name="mobile"><br><br>
    Department: <input type="text" name="department"><br><br>
    <button type="submit" name="submit">Add</button>
</form>

<hr>

<h2>Student List</h2>

<table border="1" cellpadding="10">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Department</th>
    <th>Actions</th>
</tr>

<?php
$result = $conn->query("SELECT * FROM student");

while ($row = $result->fetch_assoc()) {
?>
<tr>
    <td><?= $row['id'] ?></td>
    <td><?= $row['name'] ?></td>
    <td><?= $row['email'] ?></td>
    <td><?= $row['mobile'] ?></td>
    <td><?= $row['department'] ?></td>
    <td>
        <a href="edit.php?id=<?= $row['id'] ?>">Edit</a> |
        <a href="delete.php?id=<?= $row['id'] ?>" onclick="return confirm('Delete?')">Delete</a>
    </td>
</tr>
<?php } ?>

</table>

</body>
</html>