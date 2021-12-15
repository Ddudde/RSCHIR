<?php
    include '../db/interestingFactRepository.php';
    include '../util/httpHelper/index.php';

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $interestingFactRepository = InterestingFactRepository::getInstance();
    $httpHelper = HttpHelper::getInstance();

    $body = $httpHelper->getBody();
    $params = $httpHelper->getParams();

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            $result = $interestingFactRepository->get();
        
            echo $httpHelper->convertRestultToJSON($result);
            break;
        case 'POST':
            echo $interestingFactRepository->insert($body);
            break;
        case 'PUT':
            echo $interestingFactRepository->update($body);
            break;
        case 'DELETE':
            echo $interestingFactRepository->delete($params['ID']);
            break;
        default:
            header("HTTP/1.1 404 Not Found");
            break;
    }
?>
