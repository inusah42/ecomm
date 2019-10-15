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

    
    if(pg_fetch_array(pg_query($db_connection,"select * from Users where username = '$username'"))){
        echo "<script>alert('username taken');window.location.href='index.html'</script>";
    }else if(pg_fetch_array(pg_query($db_connection,"select * from Users where email = '$email'"))){
        echo "<script>alert('email taken');window.location.href='index.html'</script>";
    } else{
        $sqlinsert="insert into Users(Full_Name,Email,Username,Password,Address,City,State,Zip) values('{$fullname}','{$email}','{$username}','{$hashpass}','{$address}','{$city}','{$state}','{$zip}')";
 
        if(!(pg_query($sqlinsert))){
            echo "<script>alert('failed');window.location.href='index.html'</script>";
        }else{
            echo "<script>alert('Success!')；window.location.href='../index.html'</script>";
        }
    }

    pg_connect($db_connection);
?>