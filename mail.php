<!-- tiré de https://gist.github.com/AntoninMarchardDev/92cedeb61ffc980a2074f5786fde0df0 -->
<?php
if($_POST){
  $firstname = $_POST['First name'];
  $email = $_POST['E-mail'];
  $lastname = $_POST['Last name'];
  $message = $_POST['Your message'];

  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n"; //vérification que c bien un mail
  $headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP";

  $subject="$objet";
  $destinataire="xavier.ta@efrei.net";
  $body="$message";

  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'Your mail is sent';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Something went wrong';
  }

  echo json_encode($response);//optimisation
}
?>

