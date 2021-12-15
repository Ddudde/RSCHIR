<?php
    include '../security/login.php';
    include '../db/interestingFactRepository.php';
    
    $interestingFactRepository = InterestingFactRepository::getInstance();

    $interestingFactRepository->delete($_GET['ID']);
    
    header('Location: /admin/index.php');
