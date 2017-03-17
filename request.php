<?php 


$to = 'lyubinskii.timur@mail.ru '; // note the comma

$to = 'cifihixe@binka.me '; // note the comma
// Subject
$subject = 'You have new message.';

// Message
$message = '
<html>
<head>
  <title>LECSKY</title>
</head>
<body>
  <p><a href="http://www.dominanta-d.com/admin" arget="_blank" >Go to message.</a> </p>
           
</body>
</html>
';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: lesskay.od.ua';



   if (mail($to, $subject, $message, implode("\r\n", $headers))) {
              echo json_encode(['status'=>'send','status'=>'model save']);
     }else{
              echo json_encode(['status'=>'not send','status'=>'model save']);

     }