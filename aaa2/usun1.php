<?php
include "polacz.php";
$temat = wczytaj("temat"); //wczytanie z tablicy _GET ze sprawdzeniem czy niepusty
if ($sql = $baza->prepare( "DELETE FROM nauczyciel WHERE temat = ?;" ))
{
 $sql->bind_param( "s", $temat);
 $sql->execute();
 $sql->close();
}
$baza->close();
header("Location: https://localhost/zadanie1/index1.php")

?>