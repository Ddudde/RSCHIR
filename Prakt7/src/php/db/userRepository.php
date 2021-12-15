<?php
include 'core.php'; 

class UserRepository {
    private static $instance = null;
    private $mysqli;

    private function __construct() {
        $this->mysqli = DB::getMysqli();
    }

    public static function getInstance(): UserRepository {
        if (is_null(self::$instance)) {
            self::$instance = new UserRepository();
        }

        return self::$instance;
    }

    public function get() {
        return $this->mysqli->query("SELECT * FROM users");
    }

    public function insert($user): bool {
        $stmt = $this->mysqli->prepare("INSERT INTO users (name, password) VALUES (?, ?)");
        $stmt->bind_param('ss', $user['name'], $user['password']);
        return $stmt->execute();
    }

    public function update($user): bool {
        $stmt = $this->mysqli->prepare("UPDATE users SET name=?, password=? WHERE ID=?");
        $stmt->bind_param('ssi', $user['name'], $user['password'], $user['ID']);
        return $stmt->execute();
    }

    public function delete($id): bool {
        $stmt = $this->mysqli->prepare("DELETE FROM `users` WHERE `ID`=?");
        $stmt->bind_param('i', $id);
        return $stmt->execute();
    }
}
