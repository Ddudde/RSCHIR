<?php
class DB {
    private static $mysqli = null;

    public static function getMysqli(): mysqli {
        if (is_null(self::$mysqli)) {
            self::$mysqli = new mysqli("db", "user", "password", "appDB");
        }

        return self::$mysqli;
    }
}
