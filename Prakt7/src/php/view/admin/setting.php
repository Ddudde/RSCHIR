<?php
    include '../../security/login.php';

    $userDataHelper = UserDataHelper::getInstance();

    $userDataHelper->setUserData($_POST);

    header('Location: /admin/index.php');
?>