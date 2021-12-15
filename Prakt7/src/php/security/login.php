<?php
    include_once '/var/www/html/php/UserDataHelper/index.php';

    if (!isset($_SERVER['PHP_AUTH_USER'])) {
        header('WWW-Authenticate: Basic realm="My Realm"');
        header('HTTP/1.0 401 Unauthorized');
        echo 'Текст, отправляемый в том случае,
        если пользователь нажал кнопку Cancel';
        exit;
    }

    $mysqli = new mysqli("db", "user", "password", "appDB");
    $stmt = $mysqli->prepare("SELECT `password` FROM users WHERE `name`=?");
    $res = $stmt->bind_param('s', $_SERVER['PHP_AUTH_USER']);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_array(MYSQLI_ASSOC);

    if ($_SERVER['PHP_AUTH_PW'] !== $user['password']) {
        header('WWW-Authenticate: Basic realm="My Realm"');
        header('HTTP/1.0 401 Unauthorized');
        exit;
    }

    // получение данных для сессии пользователя
    session_start();

    UserDataHelper::getInstance();
?>
