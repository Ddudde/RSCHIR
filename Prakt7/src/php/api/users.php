<?php
    include '../db/userRepository.php';
    include '../util/httpHelper/index.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $userRepository = UserRepository::getInstance();
    $httpHelper = HttpHelper::getInstance();

    $body = $httpHelper->getBody();
    $params = $httpHelper->getParams();

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            $result = $userRepository->get();
        
            echo $httpHelper->convertRestultToJSON($result);
            break;
        case 'POST':
            echo $userRepository->insert($body);
            break;
        case 'PUT':
            echo $userRepository->update($body);
            break;
        case 'DELETE':
            echo $userRepository->delete($params['ID']);
            break;
        default:
            header("HTTP/1.1 404 Not Found");
            break;
    }
?>
