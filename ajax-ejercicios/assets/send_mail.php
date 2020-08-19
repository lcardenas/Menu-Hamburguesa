<?php
if(isset($_POST)){
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];

  $domain = $_SERVER["HTTP_HOST"];
  $to = "lcardenas@cpt.cl";
  $subject = "Contacto desde el formulario del sitio $domain : $subject";
  $message = "
    <p>
    Datos enviados desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
      <li>Nombre:<b>$name</b></li>
      <li>Email:<b>$email</b></li>
      <li>Subject:$subject</li>
      <li>Comments:$comments</li>
    
    </ul>
  ";

    $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n".
    "From:Envio automatico No Responder <no-reply@$domain>";

  $send_mail = mail($to,$subject,$message,$headers);

  if($send_mail){
    $res = [
      "err" => false,
      "message" => "tus datos han sido enviados"
    ];
  }else{
      $res = [
      "err" => true,
      "message" => "tus datos no han sido enviados, intente nuevamente"
    ];
  }
 
  // header("Access-Control-Allow-Origin: https://jonmircha.com");
  header("Access-Control-Allow-Origin: *");
  header('Content-type: application/json');
  echo json_encode($res);
  exit;
}