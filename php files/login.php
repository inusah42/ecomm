<?php
if (isset($_POST['signup'])) {
  $Full_Name = $_POST['Full_Name'];
  $Email = $_POST['Email'];
  $Username = $_POST['Username'];
  $Pass = $_POST['Password'];
  $Address = $_POST['Address'];
  $City = $_POST['City'];
  $State = $_POST['State'];
  $Zip = $_POST['Zip'];
  $Password = md5($Pass);

  include 'connect.php';

$query = "INSERT INTO users(Full_Name,
Email,
Username,
Password,
Address,
City,
State,
Zip,
role) VALUES ('$Full_Name',
'$Email',
'$Username',
'$Password',
'$Address',
'$City',
'$State',
'$Zip')";
if ($dbh->query($query) === TRUE) {
    echo "Succesful";
} else {
    echo "Error:" . $query  . $connection->error;
}
$connection->close();
}
?>