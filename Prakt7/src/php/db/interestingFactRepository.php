<?php
include 'core.php'; 

class InterestingFactRepository {
    private static $instance;
    private $mysqli;

    private function __construct() {
        $this->mysqli = DB::getMysqli();
    }

    public static function getInstance(): InterestingFactRepository {
        if (is_null(self::$instance)) {
            self::$instance = new InterestingFactRepository();
        }

        return self::$instance;
    }

    public function get() {
        return $this->mysqli->query("SELECT * FROM interesting_facts");
    }

    public function insert($interestingFact): bool {
        $stmt = $this->mysqli->prepare("INSERT INTO interesting_facts (title, text, url_video) VALUES (?, ?, ?)");
        $stmt->bind_param('sss', $interestingFact['title'], $interestingFact['text'], $interestingFact['url_video']);
        return $stmt->execute();
    }

    public function update($interestingFact): bool {
        $stmt = $this->mysqli->prepare("UPDATE interesting_facts SET title=?, text=?, url_video=? WHERE ID=?");
        $stmt->bind_param(
            'sssi', 
            $interestingFact['title'], 
            $interestingFact['text'], 
            $interestingFact['url_video'], 
            $interestingFact['ID']
        );
        return $stmt->execute();
    }

    public function delete($id): bool {
        $stmt = $this->mysqli->prepare("DELETE FROM `interesting_facts` WHERE `ID`=?");
        $stmt->bind_param('i', $id);
        return $stmt->execute();
    }
}
