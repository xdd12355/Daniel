<?php

class Database2
{
    public $con;
    public $error;
    
    public function __construct()
    {
        try {
            $this->con = new PDO("mysql:host=localhost;dbname=users", "root", "");
            $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        catch (PDOException $error) {
            echo 'Coś poszło nie tak' . $error->getMessage();
        }
    }
    
    public function required_validation($field)
    {
        $count = 0;
        foreach ($field as $key => $value) {
            if (empty($value)) {
                $count++;
                $this->error .= "<p>" . $key . " jest wymagany</p>";
            }
        }
        if ($count == 0) {
            return true;
        }
    }
    
    public function can_login($table_name, $fields)
    {
        $login = $fields['username'];
        $password = $fields['password'];
        $stmt = $this->con->prepare("SELECT password FROM $table_name WHERE username = :username");
        $credentials = $stmt->fetch(PDO::FETCH_ASSOC);
        $stmt->bindParam(':username', $login, PDO::PARAM_STR);
        $stmt->execute();
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (password_verify($password, $row['password'])) {
            return true;
        } else {
            $this->error = "Niepoprawny login lub hasło.";
        }
    }
    
    public function can_register($table_name, $fields)
    {
        $usernamee = $fields['usernamee'];
        $passwordd = $fields['passwordd'];
        $password2 = $fields['password2'];
        $hash = password_hash($passwordd, PASSWORD_DEFAULT);
        $email = $fields['email'];
        $stmt = $this->con->prepare("INSERT INTO $table_name (id, username, password, email, active, code, role ) VALUES (NULL, :usernamee, :hash, :email, '1', '0', '2')");
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':usernamee', $usernamee, PDO::PARAM_STR);
        $stmt->bindParam(':hash', $hash, PDO::PARAM_STR);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $this->error = "Niepoprawny e-mail.";
        } else {
            if ($this->check_mail($table_name, $email)) {
                $this->error = "E-mail znajduje się juz w bazie danych.";
            } else if ($passwordd != $password2) {
                $this->error = 'Hasła muszą być takie same';
            } else {
                $stmt->execute();
            }
        }
    }
}
?>