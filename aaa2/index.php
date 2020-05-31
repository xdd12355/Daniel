<html>
<style>
.tabelka {
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
  
	animation: gradient 1s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
.tabelka1 {
	margin: 0;
	width: 100%;
	height: 100%;
	font-family: "Exo", sans-serif;
	color: #fff;
	background: linear-gradient(-45deg, #00FF00, #FF00FF, #FFFF00, #000080 );
	background-size: 400% 400%;
	-webkit-animation: gradient 2s ease infinite;
	        animation: gradient 2s ease infinite;
}
.tabelka2 {
	margin: 0;
	width: 100%;
	height: 100%;
	font-family: "Exo", sans-serif;
	color: #fff;
	background: linear-gradient(-45deg, #800000, #0000FF, #008000, #FF0000 );
	background-size: 400% 400%;
	-webkit-animation: gradient 2s ease infinite;
	        animation: gradient 2s ease infinite;
}

</style>
 <head>
  <meta charset="utf-8">
  <title>Panel admina</title>
 </head>
 <body class="tabelka1">
 <h1>Uczeń
  <table border="1">
   <tr class='tabelka2' >
     <th>rozwiazania</th><th>klasa</th><th>imie i nazwisko</th><th>link</th><th>rozwiazania</th>
     <th>czas oddania</th><th>uwagi nauczyciela</th><th>adresIP</th><th>edytuj</th><th>usuń</th>
   </tr></h1>
<?php
include "polacz.php";
if ($sql =  $baza->prepare("SELECT * FROM uczen"))
{
        $sql->execute();
        $sql->bind_result($rozwiazania,$klasa,$imie_i_nazwisko,$link,$rozwiazanie,$czas_oddania,$uwagi_nauczyciela,$adresIP);
        while ($sql->fetch())
        {
                echo "<tr class='tabelka'>
                        <td>$rozwiazania</td>
                        <td>$klasa</td>
                        <td>$imie_i_nazwisko</td>
                        <td>$link</td>
                        <td>$rozwiazanie</td>
                        <td>$czas_oddania</td>
                        <td>$uwagi_nauczyciela</td>
                        <td>$adresIP</td>
                        <td><a href=\"edycja.php?rozwiazania=$rozwiazania\">Edytuj</a></td>
                        <td><a href=\"usun.php?rozwiazania=$rozwiazania\" onclick=\"javascript:return confirm('Czy na pewno usunąć?'); \">Usuń</a></td>
                   </tr>";
        }
        $sql->close();
 }
//else die( "Błąd w zapytaniu SQL! Sprawdź kod SQL w PhpMyAdmin." );

 $baza->close();
?>
  </table>
  <a href="dodaj.php">Dodawanie nowego</a>
 </body>
</html>