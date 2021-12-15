<?php
class UserDataHelper {
    private static $instance = null;
    private $redis;

    private function __construct() {
        $this->redis = new Redis();
        $this->redis->connect('redis', 6379);
        
        $this->init();
    }

    private function init() {
        $redis_data = json_decode($this->redis->get($_SERVER['PHP_AUTH_USER']));
    
        if (!$redis_data) {
            $default_data = [
                "language" => 'ru',
                "theme" => 'light',
                'name' => '',
            ];
    
            $default_data_redis = json_encode($default_data);
    
            $this->redis->set($_SERVER['PHP_AUTH_USER'], $default_data_redis);
    
            $redis_data = json_decode($default_data_redis);
        }
    
        $_SESSION['language'] = $redis_data->language;
        $_SESSION['theme'] = $redis_data->theme;
        $_SESSION['name'] = $redis_data->name;
    }

    public static function getInstance(): UserDataHelper {
        if (is_null(self::$instance)) {
            self::$instance = new UserDataHelper();
        }

        return self::$instance;
    }

    public function setUserData($userData) {
        $data_redis = json_encode([
            "language" => $userData['language'],
            "theme" => $userData['theme'],
            'name' => $userData['name'],
        ]);
    
        $this->redis->set($_SERVER['PHP_AUTH_USER'], $data_redis);
    
        $_SESSION['language'] = $userData['language'];
        $_SESSION['theme'] = $userData['theme'];
        $_SESSION['name'] = $userData['name'];
    }
}
