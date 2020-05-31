import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';
 
// Import F7 Styles
import 'framework7/css/framework7.bundle.css';
 
// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';

 
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.myapp', // App bundle ID
  name: 'test', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
 
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
 
 
  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    overlay: Framework7.device.cordova && Framework7.device.ios || 'auto',
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
        
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
        init();

    },
  },
});
 
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
    console.log("LOGOWANIE!")
    
  var Login = $$('#my-login-screen [name="Login"]').val();
  var Password = $$('#my-login-screen [name="Password"]').val();
  var ID = $$('#my-login-screen [name="ID"]').val();
 
  // Close login screen
  app.loginScreen.close('#my-login-screen');
 
  // Alert username and password
  app.dialog.alert('Login: ' + Login + '<br>Password: ' + Password+'<br>Twoje ID: ');   
});
 





//sss
var db2;
var shortName = 'Bazaa';
var version = '2.0';
var displayName = 'Bazaa';
var maxSize = 65535;
    
    
    
    
    function errorHandler(transaction, error) {
   alert('Błąd: ' + error.message + ' kod błędu: ' + error.code);
}
 
// Funkcja wywoływana po udanej transakcji z bazą
function successCallBack() {
   alert("Debuger: sukces!");
}
 
function nullHandler(){};
 
//Funkcja wywoływana po starcie apki
function init(){
    if (!window.openDatabase) {
       alert('Twoje urządzenie nie obsługuje SQLite!');
       return;
    }
    db2 = openDatabase(shortName, version, displayName,maxSize); //tworzy połączenie z bazą
    db2.transaction(function(tx){ //wykonuje SQL
    //tx.executeSql( 'DROP TABLE Konta1',nullHandler,nullHandler);
    tx.executeSql( 'CREATE TABLE IF NOT EXISTS Konta1(ID TEXT NOT NULL, Login TEXT NOT NULL,Password TEXT NOT NULL)',[],
          db2.nullHandler,
          db2.errorHandler
        );
      }.bind(db2),
      db2.errorHandler,
      db2.successCallBack
    );
    
}
   
function ListDBValues() {
 if (!window.openDatabase) {
  alert('To urządzenie nie obsługuje SQLite!');
  return;
 }
 $$('#Konta1').html(''); //wyczyszczenie wcześniejszej zawartości
 db2.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM Konta1 where ID=1;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $$('#Konta').append('<br>' + row.ID + ' ' +row.Login + ' ' + row.Password+ ' ');
        }
       }
     },errorHandler);
 },errorHandler,nullHandler);
    
 return
}
 
    
    
    
$$(document).on("page:init",'.page[data-name="Konta"]',function(e){
    console.log("LOGIN");
    $$('#pokaz').on('click', () => {      
        console.log("pokazane")
      ListDBValues();                    
 
 
 
    });
   
    $$('#zapisz').on('click', () => {   
        DeleteFromDB();
        console.log("zapisane")
        AddValueToDB();
        
 
 
    });
});
   


function DeleteFromDB(IDID,Login,Password){
 if (!window.openDatabase) {
  alert('To urządzenie nie obsługuje SQLite!');
  return;
 }
 db2.transaction(function(transaction) {
   transaction.executeSql('DELETE FROM Konta1;', [],
    function(transaction, result) {
       console.log("deleted");
       ListDBValues();
    },errorHandler);
 },errorHandler,nullHandler);
 return
}
 
 
 
function AddValueToDB(ID,Login,Password) {
 if (!window.openDatabase) {
   alert('To urządzenie nie obsługuje SQLite!');
   return;
 }
 
 db2.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO Konta1(ID, Login, Password) VALUES (?,?,?)',[$$('#ID').val(),$$('#Login').val(),$$('#Password').val(),],
     nullHandler,errorHandler);
               app.dialog.alert('Login: ' + $$('#Login').val() + '<br>Password: ' + $$('#Password').val() + '<br>Twoje ID: ' +$$('#ID').val());
       app.loginScreen.close('#my-login-screen');

                                

   });
    
    
    


 
 return false;
}

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    

    $$('#dodawanie').on('click', () => { 
    
    var a = document.getElementById("a").value; 
    var A1 = parseInt(a); 
    var b = document.getElementById("b").value; 
    var B1 = parseInt(b); 
    var wynik = A1+B1;
        console.log(wynik);
        document.getElementById("wynik").innerHTML="Wynik dodawania="+wynik;
    });
    $$('#odejmowanie').on('click', () => { 
    
    var a = document.getElementById("a").value; 
    var A1 = parseInt(a); 
    var b = document.getElementById("b").value; 
    var B1 = parseInt(b); 
    var wynik = A1-B1;
    document.getElementById("wynik").innerHTML="Wynik odejmowania="+wynik;

        console.log(wynik);
    });
    $$('#dzielenie').on('click', () => { 
    
    var a = document.getElementById("a").value; 
    var A1 = parseInt(a); 
    var b = document.getElementById("b").value; 
    var B1 = parseInt(b); 
    var wynik = A1/B1;
    document.getElementById("wynik").innerHTML="Wynik dzielenia="+wynik;

        console.log(wynik);
    });
    $$('#mnozenie').on('click', () => { 
    
    var a = document.getElementById("a").value; 
    var A1 = parseInt(a); 
    var b = document.getElementById("b").value; 
    var B1 = parseInt(b); 
    var wynik = A1*B1;
    document.getElementById("wynik").innerHTML="Wynik mnozenia="+wynik;

        console.log(wynik);
    });
    
    
})



$$(document).on('page:init', '.page[data-name="tabelka"]', function (e) {
    let a = 0;
    let b = 0;

                $$('#dod').on('click', () => { 
                     
                      
                      let numerek = a+1;
                      a++;
                      b++;
                      let kol = a*13;
                      let kol1 = "x13="
                      let kol2 = a
                      var table = document.getElementById("myTable");
                      var row = table.insertRow(b);
                      var cell1 = row.insertCell(0);
                      var cell2 = row.insertCell(1);
                      var cell3 = row.insertCell(2);
                      cell1.innerHTML = "13";
                      cell2.innerHTML = numerek;
                      cell3.innerHTML = kol2+kol1+kol;
                    
              
                });
    
    
})




$$(document).on('page:init', '.page[data-name="regex"]', function (e) {


                $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("imie").value;
                        var patt = new RegExp("[A-Z]{1}[a-z]+");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("a").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("a").style.backgroundColor="red";

                            }
                
                });
                $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("nazwisko").value;
                        var patt = new RegExp("[A-Z]{1}[a-z]+");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("b").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("b").style.backgroundColor="red";

                            }
                
                });
                    $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("miasto").value;
                        var patt = new RegExp("[A-Z]{1}[a-z]+");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("c").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("c").style.backgroundColor="red";

                            }
                
                });
                        $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("kodpocztowy").value;
                        var patt = new RegExp("[0-9]{2}-[0-9]{3}");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("d").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("d").style.backgroundColor="red";

                            }
                
                });
                        $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("email").value;
                        var patt = new RegExp("[a-z]+@[a-z]+.pl");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("e").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("e").style.backgroundColor="red";

                            }
                
                });
                        $$('input[type="text"]').on('keyup change', function (e){ 
                        var str = document.getElementById("telefon").value;
                        var patt = new RegExp("[0-9]{3}-[0-9]{3}-[0-9]{3}");
                        var res = patt.test(str);
                      if(res==true)
                            {
                              document.getElementById("f").style.backgroundColor="green";
                            }
                        else
                            {
                              document.getElementById("f").style.backgroundColor="red";

                            }
                
                });
    
    
})


    




























































//cars
/*var db;
var shortName = 'Baza';
var version = '1.0';
var displayName = 'Baza';
var maxSize = 65535;
var db1;
var shortName1 = 'Baza1';
var version1 = '1.1';
var displayName1 = 'Baza1';
var maxSize1 = 65535;
 
// wywoływana kiedy pojawi się błąd w połączeniu do bazy:
function errorHandler(transaction, error) {
   //alert('Błąd: ' + error.message + ' kod błędu: ' + error.code);
}
 
// Funkcja wywoływana po udanej transakcji z bazą
function successCallBack() {
   alert("Debuger: sukces!");
}
 
function nullHandler(){};
 
//Funkcja wywoływana po starcie apki
function init(){
    if (!window.openDatabase) {
       alert('Twoje urządzenie nie obsługuje SQLite!');
       return;
    }
    db = openDatabase(shortName, version, displayName,maxSize); //tworzy połączenie z bazą
    db.transaction(function(tx){ //wykonuje SQL
     //tx.executeSql( 'DROP TABLE User11',nullHandler,nullHandler);
    tx.executeSql( 'CREATE TABLE IF NOT EXISTS User10(ID INTEGER PRIMARY KEY, Marka TEXT NOT NULL,Rok TEXT NOT NULL,Silnik TEXT NOT NULL,Pojemnosc TEXT NOT NULL)',[],
          db.nullHandler,
          db.errorHandler
        );
      }.bind(db),
      db.errorHandler,
      db.successCallBack
    );
    
    db1 = openDatabase(shortName1, version1, displayName1,maxSize1);
    console.log("utworzono"); 
    db.transaction(function(tx){ //wykonuje SQL
    // tx.executeSql( 'DROP TABLE User',nullHandler,nullHandler);
    tx.executeSql( 'CREATE TABLE IF NOT EXISTS User11(UserId INTEGER PRIMARY KEY,Adres TEXT NOT NULL,Pesel TEXT NOT NULL,Imie TEXT NOT NULL,Nazwisko TEXT NOT NULL )',[],
          db.nullHandler,
          db.errorHandler
        );
      }.bind(db),
      db.errorHandler,
      db.successCallBack
    );
}
   
function ListDBValues() {
 if (!window.openDatabase) {
  alert('To urządzenie nie obsługuje SQLite!');
  return;
 }
 $$('#lbUsers').html(''); //wyczyszczenie wcześniejszej zawartości
 db.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM User10;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $$('#lbUsers').append('<br>' + row.ID + ' ' + row.Marka+ ' ' + row.Rok+ ' ' + row.Silnik+ ' ' + row.Pojemnosc+ ' ');
                             
        }
       }
     },errorHandler);
 },errorHandler,nullHandler);
    
    $$('#lbUsers1').html('');
    db.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM User11;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $$('#lbUsers1').append('<br>' + row.UserId + ' '  + row.Pesel+ ' '+ row.Adres+ ' ' + row.Imie+ ' ' + row.Nazwisko+ ' ');
                             
        }
       }
     },errorHandler);
 },errorHandler,nullHandler);
 return
}
 
$$(document).on("page:init",'.page[data-name="index"]',function(e){
    $$('#odswiezanie').on('click', () => {      
        console.log("click")
      ListDBValues();                    
 
 
 
    });
   
$$('#dodawanie').on('click', () => {      
        console.log("click")
      AddValueToDB();                    
 
 
 
    });
});
 
 
 
function AddValueToDB() {
 if (!window.openDatabase) {
   alert('To urządzenie nie obsługuje SQLite!');
   return;
 }
 
 db.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO User10(ID,Marka, Rok, Silnik, Pojemnosc) VALUES (?,?,?,?,?)',[$$('#ID').val(),$$('#Marka').val(),$$('#Rok').val(),$$('#Silnik').val(),$$('#Pojemnosc').val()],
     nullHandler,errorHandler);
   });
 db.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO User11(UserId,Pesel, Adres, Imie, Nazwisko) VALUES (?,?,?,?,?)',[$$('#UserId').val(),$$('#Pesel').val(),$$('#Adres').val(),$$('#Imie').val(),$$('#Nazwisko').val()],
     nullHandler,errorHandler);
   });
 
 return false;
}*/