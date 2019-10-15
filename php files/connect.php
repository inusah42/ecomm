<?php
$dbuser = 'tjzntcroxpnjme';
$dbpass = 'f26ae870fba99aa4ec86ad28f5b4e2df70de121c81324e818122615da4dcb59a';
$host = 'ec2-174-129-41-127.compute-1.amazonaws.com';
$dbname='dm2oitjf83u73';
$dbh = new PDO("pgsql:host=$host;dbname=$dbname, $dbuser, $dbpass")
?>