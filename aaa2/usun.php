<?php
include "polacz.php";
$rozwiazania = wczytaj("rozwiazania"); //wczytanie z tablicy _GET ze sprawdzeniem czy niepusty
if ($sql = $baza->prepare( "DELETE FROM uczen WHERE rozwiazania = ?;" ))
{
 $sql->bind_param( "i", $rozwiazania);
 $sql->execute();
 $sql->close();
}
$baza->close();
header("Location: https://localhost/zadanie1")

?>