<?php
    include '/var/www/html/php/security/login.php';
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Графики</title>
</head>
<body>
    <h1>Графики</h1>
    
    <div>
        <a href="/admin/index.php">административная панель</a>
    </div>

    <div>
        <img src="/admin/graphics/graphicHumadityAndTemperature.php"/>
    </div>
    <div>
        <img src="/admin/graphics/graphicilluminace.php"/>
        <img src="/admin/graphics/graphicSound.php"/>
    </div>
    <div>
        <img src="/admin/graphics/graphicVoltage.php"/>
    </div>
</body>
</html>

