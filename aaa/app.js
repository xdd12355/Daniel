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
    },
  },
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


function PeselDecode(pesel) {
  
  var rok = parseInt(pesel.substring(0, 2), 10);
  var miesiac = parseInt(pesel.substring(2, 4), 10) - 1;
  var dzien = parseInt(pesel.substring(4, 6), 10);
  // Powszechnie uwaza sie, iz daty w numerach pesel obejmuja tylko ludzi urodzonych do 2000 roku. Na szczescie prawodawcy o tym pomysleli i do miesiaca dodawane sa liczby tak, by pesele starczyly az do 23 wieku. 
  if (miesiac > 80) {
    rok = rok + 1800;
    miesiac = miesiac - 80;
  } else if (miesiac > 60) {
    rok = rok + 2200;
    miesiac = miesiac - 60;
  } else if (miesiac > 40) {
    rok = rok + 2100;
    miesiac = miesiac - 40;
  } else if (miesiac > 20) {
    rok = rok + 2000;
    miesiac = miesiac - 20;
  } else {
    rok += 1900;
  }
  // Daty sa ok. Teraz ustawiamy.
  var urodzony = new Date();
  urodzony.setFullYear(rok, miesiac, dzien);

  // Teraz zweryfikujemy numer pesel
  // Metoda z wagami jest w sumie najszybsza do weryfikacji.
  var wagi = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
  var suma = 0;

  for (var i = 0; i < wagi.length; i++) {
    suma += (parseInt(pesel.substring(i, i + 1), 10) * wagi[i]);
  }
  suma = suma % 10;
  var valid = (suma === parseInt(pesel.substring(10, 11), 10));

  //plec
  if (parseInt(pesel.substring(9, 10), 10) % 2 === 1) {
    var plec = 'm';
  } else {
    var plec = 'k';
  }
  return {
    valid: valid,
    sex: plec,
    date: urodzony
  };
}

//dziedziczenie
function Base (name){
	{
  this.name = name;
}

Base.prototype.getName = function (){
  return this.name + ' zielony';
}

var test = new Base('ogórek');

document.getElementById('result').innerHTML = test.getName();

// ciekawostka: właściwość name też jest dostępna
//document.getElementById('result').innerHTML = test.name;
};



	//pesel
		function sprawdz()
		{
			var liczba = document.getElementById("pole").value;
 var reg = /^[0-9]{11}$/;
    if(reg.test(pesel) == false) 
        return false;
    else
    {
        var digits = (""+pesel).split("");
        if ((parseInt(pesel.substring( 4, 6)) > 31)||(parseInt(pesel.substring( 2, 4)) > 12))
            return false;
         
        var checksum = (1*parseInt(digits[0]) + 3*parseInt(digits[1]) + 7*parseInt(digits[2]) + 9*parseInt(digits[3]) + 1*parseInt(digits[4]) + 3*parseInt(digits[5]) + 7*parseInt(digits[6]) + 9*parseInt(digits[7]) + 1*parseInt(digits[8]) + 3*parseInt(digits[9]))%10;
        if(checksum==0) checksum = 10;
            checksum = 10 - checksum;
 
        return (parseInt(digits[10])==checksum);
    }
}

//wyszukiwarka
const searchInput = document.querySelector("input");
const li = [...document.querySelectorAll("ul li")];
const ul = document.querySelector("ul");

const searchWord = e => {
const currentWord = e.target.value.toUpperCase();
let result = li;
result = result.filter(li => li.textContent.toUpperCase().includes(currentWord));
ul.textContent = '';
result.forEach(name => ul.appendChild(name));
}

searchInput.addEventListener('input', searchWord);
	