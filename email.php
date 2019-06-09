<?php
    if (true){
        if($_POST["message"]) {
            $email = $_POST["email"];
            $message = $_POST["message"];
            $name = $_POST["name"];
            mail("hello@philippec.me", "Email from $name", $message, "From: $name\n$email");
        }
    }
    else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>