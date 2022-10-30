<?php
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['text'];

if (!empty($name) || !empty($email) || !empty($text)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "contact";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

    if (mysqli_connect_error()) {
        die('Connect Error(' . mysqli_connect_errno() . ')' . mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From contact Where email = ? LIMIT 1";
        $INSERT = "INSERT Into contact (name, email, text) values (?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if ($rnum == 0) {
            $stmt->close();

            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("sss", $name, $email, $text);
            $stmt->execute();
            function Redirect($url, $permanent = false)
            {
                if (headers_sent() === false) {
                    header('Location: ' . $url, true, ($permanent === true) ? 301 : 302);
                }

                exit();
            }

            Redirect('thank-you.html', false);
        } else {
            echo "Someone else used this email already";
        }
        $stmt->close();
        $conn->close();
    }
} else {
    echo "Please fill every field";
    die();
}
