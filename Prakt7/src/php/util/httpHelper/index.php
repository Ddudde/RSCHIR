<?php
class HttpHelper {
    private static $instance;

    public static function getInstance(): HttpHelper {
        if (is_null(self::$instance)) {
            self::$instance = new HttpHelper();
        }

        return self::$instance;
    }

    public function convertRestultToJSON($result) {
        $facts = [];
        while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $facts[] = $row;
        }
        return json_encode($facts);
    }

    public function getParams() {
        $query = $_SERVER['QUERY_STRING'];

        $delete_args = [];

        if ( !empty( $query ) )
        {
            foreach( explode('&', $query ) as $param )
            {
                list($k, $v) = explode('=', $param);
                $k = urldecode($k);
                $v = urldecode($v);
                $delete_args[$k] = $v ;
            }
        }

        return $delete_args;
    }

    public function getBody() {
        return json_decode(file_get_contents('php://input'), true);
    }
}
