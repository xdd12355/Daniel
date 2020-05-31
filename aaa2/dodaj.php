<html>
 <head>
  <meta charset="utf-8">
  <title>Dodaj nowy obiekt</title>
 </head>
 <body>
  <h1>Dodawanie do bazy</h1>
  <form method="get" action="insert.php">
   <table border="0">
             <tr><td>rozwiazania</td><td><input name="rozwiazania"></td></tr>
      <tr><td>klasa</td><td>
          <select name="klasa" id="klasa">
          <option value="--">---------</option>
          <option value="1Tp1">1Tp1</option>
          <option value="1Tp2">1Tp2</option>
          <option value="2Pi">2Pi</option>
          <option value="2Tp1">2Tp1</option>
          <option value="2Tp2">2Tp2</option>
          <option value="3Ti">3Ti</option>
          <option value="4Ti">4Ti</option>
          </select>
          </td></tr>
      <tr><td>imie_i_nazwisko</td><td><input name="imie_i_nazwisko" type></td></tr>
      <tr><td>link</td><td><input name="link"></td></tr>
      <tr><td>rozwiazanie</td><td><input name="rozwiazanie"></td></tr>
      <tr><td>czas_oddania</td><td><input type="datetime-local" name="czas_oddania"></td></tr>
      <tr><td>uwagi_nauczyciela</td><td><input name="uwagi_nauczyciela"></td></tr>
      <tr><td>adresIP</td><td><input name="adresIP"></td></tr>
      <tr><td colspan="2"><input type="submit" value="wstaw"></td></tr>
   </table>
  </form>
 </body>
</html>
