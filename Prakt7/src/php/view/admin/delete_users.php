<?php
    include '../../security/login.php';
    include '../../db/userRepository.php';
    
    $userRepository = UserRepository::getInstance();

    $userRepository->delete($_GET['ID']);
    
    header('Location: /admin/index.php');
