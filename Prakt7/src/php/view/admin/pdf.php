<?php 
    include '../../security/login.php';
    include 'constants.php';

    if ($_FILES['userfile']['type'] == "application/pdf" && move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
        header('Location: /admin/index.php');
    } else {
        echo '<pre>';
        echo "Возможная атака с помощью файловой загрузки!\n";
    }
    
    echo 'Некоторая отладочная информация:';
    print_r($_FILES);
    
    print "</pre>";
?>