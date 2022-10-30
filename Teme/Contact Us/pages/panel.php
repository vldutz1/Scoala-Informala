<?php
$servername = "localhost";
$username = "root";
$password = "root";
$conn = new mysqli($servername,$username,$password);
if($conn->connect_error){
  die("connection failed: " . $conn->connect_error);
}
$sql = "SELECT first_name, last_name, email, address.address,
address.district, address.postal_code, address.phone, country.country
FROM staff
 JOIN address ON staff.address_id = address.address_id
 JOIN city ON address.city_id = city.city_id
 JOIN country ON city.country_id = country.country_id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    echo"<table>";
    echo("<table border = \"1\">");
    print("<tr>");
    print("<th>First Name</th>");
    print("<th>Last Name</th>");
    print("<th>Email</th>");
    print("<th>Address</th>");
    print("<th>District</th>");
    print("<th>Postal Code</th>");
    print("<th>Phone</th>");
    print("<th>Country</th>");
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["staff.last_name"]. "</td><td>" . $row["staff.first_name"].
        "</td><td>" . $row["staff.email"]. "</td><td>" . $row["address.address"] . "</td><td>" .
        $row["address.district"] . "</td><td>" . $row["address.postal_code"] . "</td><td>" .
        $row["address.phone"] . "</td><td>" . $row["country.country"] . "</td></tr>";
    }
} else {
    echo "0 results";
}
echo"</table>";
$conn->close();

?>