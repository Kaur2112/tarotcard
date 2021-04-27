<?php
    $name $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'karneet0211@yahoo.ca';
    $email_subject = "New Form Submission";
    $email_body = "Username: $name./\n".
                    "user Email: $visitor_email.\n".
                    "User Message: $message/\m";
    $to = "karneet0211@yahoo.ca";

    $headers "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject.$email_body, $headers);
    header("Location: index.html"):

?>