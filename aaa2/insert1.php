<?php
include "polacz.php";
 $klasa = wczytaj("klasa");
 $temat = wczytaj("temat");
 $tresc = wczytaj("tresc");
 $data_i_godzina = wczytaj("data_i_godzina");
 $data_i_godzina_oddania = wczytaj("data_i_godzina_oddania");


$sql = $baza->prepare("INSERT INTO nauczyciel VALUES (?, ?, ?, ?, ?);");
if ($sql)
{
        $sql->bind_param("sssss", $klasa, $temat, $tresc, $data_i_godzina, $data_i_godzina_oddania);
        $sql->execute();
        echo $baza->error;
        $sql->close();
}
else
    die( 'Błąd: '. $baza->error);
$baza->close();
header("Location: https://localhost/zadanie1/index1.php")
?>
