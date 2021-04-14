<?php
include('conn.php');
session_start();
$data = new Database;
$message = '';
    if(isset($_POST['usernamee']))
    {
        $field = array(
            'email' => $_POST['email'],
            'usernamee' => $_POST['usernamee'],
            'passwordd' => $_POST['passwordd'],
            'password2' => $_POST['password2']
        );
        if($data->required_validation($field))
        {
            if($data->can_register("users", $field))
            {
                $_SESSION['usernamee'] = $_POST['usernamee'];
                header("location: login.php");
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
            <!-- <h2>Zarejstruj się</h2> -->
            <div class="form-group"><input class="form-control" type="email" name="email" placeholder="E-mail"></div>
            <div class="form-group"><input class="form-control" type="text" name="usernamee" placeholder="Login"></div>
            <div class="form-group"><input class="form-control" type="password" name="passwordd" placeholder="Hasło"></div>
            <div class="form-group"><input class="form-control" type="password" name="password2" placeholder="Powtórz hasło"></div>
            <div class="form-group"><button class="btn btn-primary btn-block">Zarejstruj się</button></div>
            Posiadasz juz konto? <a href="login.php">Zaloguj się.</a>
        </form>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
</body>
</html>