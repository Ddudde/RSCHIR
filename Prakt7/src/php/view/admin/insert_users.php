<?php
    include '../../security/login.php';
    include '../../db/userRepository.php';
    
    $userRepository = UserRepository::getInstance();

    $userRepository->insert($_POST);

    header('Location: /admin/index.php');
?>