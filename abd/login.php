<?php
include('conn.php');
session_start();
$data = new Database;
$message = '';
    if(isset($_POST['username']))
    {
        $field = array(
            'username' => $_POST['username'],
            'password' => $_POST['password']
        );
        if($data->required_validation($field))
        {
            if($data->can_login("users", $field))
            {
                $_SESSION['username'] = $_POST['username'];
                header("location: index.php");
            }
            else
            {
                $message = $data->error;
            }
        }
        else
        {
            $message = $data->error;
        }
    }
?>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="stylee.css">
</head>
<body>
    <div class="login" style="height: 695px;">
        <?php
        if(isset($message))
        {
            echo "<label class='text-danger'>$message</label>";
        }
        ?>
        <form method="POST">
            <!-- <h2>Zaloguj się</h2> -->
            <div class="form-group"><input class="form-control" type="text" name="username" placeholder="Login"></div>
            <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Hasło"></div>
            <div class="form-group"><button class="btn btn-primary btn-block">Zaloguj się</button></div>
            Nie masz konta? <a href="register.php">Zarejestruj się.</a>
        </form>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
</body>
</html>