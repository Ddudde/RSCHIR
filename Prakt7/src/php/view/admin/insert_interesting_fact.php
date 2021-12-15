<?php
    include '../../security/login.php';
    include '../../db/interestingFactRepository.php';
    
    $interestingFactRepository = InterestingFactRepository::getInstance();

    $interestingFactRepository->insert($_POST);

    header('Location: /admin/index.php');
?>