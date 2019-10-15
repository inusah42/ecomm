<?php
    $db_connection = pg_connect("host=localhost dbname=dm2oitjf83u73 user=tjzntcroxpnjme password=f26ae870fba99aa4ec86ad28f5b4e2df70de121c81324e818122615da4dcb59a");

    
    $fullname = $_POST['name'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $pass = $_POST['pass'];
    $hashpass=password_hash($pass, PASSWORD_DEFAULT);
    $address = $_POST['address'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];

    $sqlinsert="insert into Users(Full_Name,Email,Username,Password,Address,City,State,Zip) values('{$fullname}','{$email}','{$username}','{$hashpass}','{$address}','{$city}','{$state}','{$zip}')";
?>