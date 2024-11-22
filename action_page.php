<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Combine the first and last name for the email
    $name = $firstname . " " . $lastname;

    // Email configuration
    $to = "sarah.paluszny@gmail.com"; // Replace with your email address
    $email_subject = "Contact Form Submission: $subject";
    $email_body = "Name: $name\nSubject: $subject\n\nMessage:\n$message";
    $headers = "From: no-reply@yourdomain.com"; // Replace with a valid domain email

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you, $firstname! Your message has been sent.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
?>
