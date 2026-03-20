const API_KEY = "73f81ed4ae4a0d79c688840a765d59bb";
var TEMP;

function cercaDati(citta) {
  cercaDatiSettimanaByCitta(citta);
  document.getElementById('input').value = ''
  document.getElementById("input").innerHTML = null;

  var URL_CITTA = "https://api.openweathermap.org/data/2.5/weather?q=" +
    citta
    + "&lang=it&appid="
    + API_KEY;

  var richiesta = new XMLHttpRequest();
  richiesta.open("GET", URL_CITTA, true);
  richiesta.onload = function () {
    if (richiesta.status >= 200 && richiesta.status < 400) {
      var data = JSON.parse(this.response);
      scriviDati(data);
    } else {
    }
  }
  richiesta.send();
}

function cercaDatiGeolocalizzate(lat, lon) {
  cercaDatiSettimanaByCoord(lat, lon);
  var URL_COORD = "https://api.openweathermap.org/data/2.5/weather?lat="
    + lat
    + "&lon="
    + lon
    + "&lang=it&appid="
    + API_KEY;
  var richiesta = new XMLHttpRequest();
  richiesta.open("GET", URL_COORD, true);
  richiesta.onload = function () {
    if (richiesta.status >= 200 && richiesta.status < 400) {
      var data = JSON.parse(this.response);
      scriviDati(data);
    } else {
      document.getElementById("risultato").innerHTML = "ERRORE GENERICO";
    }
    document.getElementById("input").innerHTML = "";

  }
  richiesta.send();
}

function cercaDatiSettimanaByCoord(lat, lon) {
  var URL_CITTA = "https://api.openweathermap.org/data/2.5/forecast?lat="
    + lat + "&lon="
    + lon + "&lang=it&appid="
    + API_KEY;


  var richiesta = new XMLHttpRequest();
  richiesta.open("GET", URL_CITTA, true);
  richiesta.onload = function () {
    if (richiesta.status >= 200 && richiesta.status < 400) {
      var data = JSON.parse(this.response);
      console.log(data);
      TEMP = data;
      scriviDatiSettimana(data)
    } else {
    }
  }
  richiesta.send();
}


function cercaDatiSettimanaByCitta(citta) {
  var URL_CITTA = "https://api.openweathermap.org/data/2.5/forecast?q=" +
    citta
    + "&lang=it&appid="
    + API_KEY;

  var richiesta = new XMLHttpRequest();
  richiesta.open("GET", URL_CITTA, true);
  richiesta.onload = function () {
    if (richiesta.status >= 200 && richiesta.status < 400) {
      var data = JSON.parse(this.response);
      console.log(data);
      TEMP = data;
      scriviDatiSettimana(data)
    } else {
    }
  }
  richiesta.send();
}


function prendiGiorniSettimana(data, index) {
  var giorno;
  let DT;
  DT = data.list[index].dt;
  var date = new Date(DT * 1000);
  var giorno = date.getDay();
  switch (giorno) {
    case 1: giorno = "Lun"; break;
    case 2: giorno = "Mar"; break;
    case 3: giorno = "Mer"; break;
    case 4: giorno = "Gio"; break;
    case 5: giorno = "Ven"; break;
    case 6: giorno = "Sab"; break;
    case 0: giorno = "Dom"; break;
  }
  return giorno;
}

function prendiMesiSettimana(data, index) {
  let DT;
  DT = data.list[index].dt;
  var date = new Date(DT * 1000);
  const month = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
  let mese = month[date.getMonth()];
  return mese;
}

function prendiNumeroSettimana(data, index) {
  let DT;
  DT = data.list[index].dt;
  var date = new Date(DT * 1000);
  let numero = date.getDate();
  return numero;
}

function prendiGiornoSettimana(data, index) {
  let DT;
  DT = data.list[index].dt;
  var date = new Date(DT * 1000);
  const giorni = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedi", "Venerdì", "Sabato"];
  let day = giorni[date.getDay()]
  return day;

}


function scriviDatiSettimana(data) {
  document.getElementById("meteo-settimana").removeAttribute("hidden");

  document.getElementById("day2").innerHTML = '<br>' + prendiGiorniSettimana(data, 8);
  document.getElementById("day3").innerHTML = '<br>' + prendiGiorniSettimana(data, 16);
  document.getElementById("day4").innerHTML = '<br>' + prendiGiorniSettimana(data, 24);

  document.getElementById("temp-day1").innerHTML = ((data.list[0].main.temp - 273).toFixed(0)) + '°C';
  document.getElementById("temp-day2").innerHTML = ((data.list[8].main.temp - 273).toFixed(0)) + '°C';
  document.getElementById("temp-day3").innerHTML = ((data.list[16].main.temp - 273).toFixed(0)) + '°C';
  document.getElementById("temp-day4").innerHTML = ((data.list[24].main.temp - 273).toFixed(0)) + '°C';
  prendiAnteprimaIncona(data);
}

function scriviDati(data) {
  console.log(data);
  prendiIcona(data);
  document.getElementById("citta").innerHTML = data.name + ", " + data.sys.country;
  document.getElementById("temperatura").innerHTML = "" + (data.main.temp - 273).toFixed(0) + " °C";

  document.getElementById("class-pressione").innerHTML =
    '<span class="titolo">Pressione</span>' +
    '<span class="valore" id="pressione">' + data.main.pressure + 'hPa </span>' +
    '<div class="clear"></div>';
  document.getElementById("class-umidita").innerHTML =
    '<br>' +
    '<span class="titolo">Umidità</span>' +
    '<span class="valore" id="umidita">' + data.main.humidity +
    ' %</span>' +
    '<div class="clear"></div>';
  document.getElementById("class-vento").innerHTML =
    '<br>' +
    '<span class="titolo">Vento</span>' +
    '<span class="valore" id="vento">' + (data.wind.speed * 3.6).toFixed(1) +
    ' km/h</span>' +
    '<div class="clear"></div> </div>';
  document.getElementById("descrizione").innerHTML = (data.weather[0].description);
}

function scriviDatiBySettimana(data, index) {
  meteoBySelezione(data, index);
  console.log(data);
  document.getElementById("citta").innerHTML = data.city.name + ", " + data.city.country;
  document.getElementById("data").innerHTML = prendiGiornoSettimana(data, index) + " " + prendiNumeroSettimana(data, index) + " " + prendiMesiSettimana(data, index);
  document.getElementById("temperatura").innerHTML = "" + (data.list[index].main.temp - 273).toFixed(0) + " °C";

  document.getElementById("class-pressione").innerHTML =
    '<span class="titolo">Pressione</span>' +
    '<span class="valore" id="pressione">' + data.list[index].main.pressure + 'hPa </span>' +
    '<div class="clear"></div>';
  document.getElementById("class-umidita").innerHTML =
    '<br>' +
    '<span class="titolo">Umidità</span>' +
    '<span class="valore" id="umidita">' + data.list[index].main.humidity +
    ' %</span>' +
    '<div class="clear"></div>';
  document.getElementById("class-vento").innerHTML =
    '<br>' +
    '<span class="titolo">Vento</span>' +
    '<span class="valore" id="vento">' + (data.list[index].wind.speed * 3.6).toFixed(1) +
    ' km/h</span>' +
    '<div class="clear"></div> </div>';
  document.getElementById("class-precipitazioni").innerHTML =
    '<br>' +
    '<span class="titolo">Precipitazioni</span>' +
    '<span class="valore" id="vento">' + (data.list[index].pop * 100).toFixed(0) +
    ' %</span>' +
    '<div class="clear"></div> </div>';

  document.getElementById("descrizione").innerHTML = (data.list[index].weather[0].description);

}

function showCitta() {
  this.cercaDati(document.getElementById("input").value);
}

function prendiAnteprimaIncona(data) {
  for (i = 0; i < 25; i = i + 8) {
    //sereno
    if (data.list[i].weather[0].icon == "01n" || data.list[i].weather[0].icon == "01d") {
      document.getElementById("giorno" + i).innerHTML = (
        '<div class="icon-mini">' +
        '<div class="rays">' +
        '<div class="ray"></div>' +
        '<div class="ray"></div>' +
        '<div class="ray"></div>' +
        '<div class="ray"></div>' +
        '</div>' +
        '<div class="sun"></div>' +
        '</div>'
      );
    }
    //nuvoloso
    if (data.list[i].weather[0].icon == "02n" || data.list[i].weather[0].icon == "03n" || data.list[i].weather[0].icon == "04n" || data.list[i].weather[0].icon == "02d" || data.list[i].weather[0].icon == "03d" || data.list[i].weather[0].icon == "04d") {
      document.getElementById("giorno" + i).innerHTML = (
        '<div class="icon-mini">' +
        '<div class="cloud2 small-cloud"></div>' +
        '<div class="cloud2"></div>' +
        '</div>'
      );
    }
    //pioggia
    if (data.list[i].weather[0].icon == "10n" || data.list[i].weather[0].icon == "09n" || data.list[i].weather[0].icon == "10d" || data.list[i].weather[0].icon == "09d") {
      document.getElementById("giorno" + i).innerHTML = (
        '<div class="icon-mini">' +
        '<div class="cloud2"></div>' +
        '<div class="rain"></div>' +
        '</div>'
      );
    }
    //temporale
    if (data.list[i].weather[0].icon == "11n" || data.list[i].weather[0].icon == "11d") {
      document.getElementById("giorno" + i).innerHTML = (
        '<div class="icon-mini" >' +
        '<div class= "cloud2"></div>' +
        '<div class="thunder">' +
        '<div class="bolt"></div>' +
        '<div class="bolt"></div>' +
        '</div> </div>'
      );
    }
    //nevica
    if (data.list[i].weather[0].icon == "13n" || data.list[i].weather[0].icon == "13d") {
      document.getElementById("giorno" + i).innerHTML = (
        '<div class="icon-mini">' +
        '<div class="cloud2"></div>' +
        '<div class="snow">' +
        '<div class="flake"></div>' +
        '<div class="flake"></div>' +
        '<div class="flake"></div>' +
        '<div class="flake"></div>' +
        '</div> </div>'
      );
    }
    //nebbia
    if (data.list[i].weather[0].icon == "50d" || data.list[i].weather[0].icon == "50n") {
      document.getElementById("giorno" + i).innerHTML = (
        '<div class="icon-mini"> <div class="extreme text-center">' +
        '<div class="harsh-wind"></div>' +
        '<div class="harsh-wind"></div>' +
        '<div class="harsh-wind"></div>' +
        '<div class="harsh-wind"></div>' +
        '<div class="harsh-wind"></div>' +
        '<div class="harsh-wind"></div>' +
        '<div class="harsh-wind"></div>' +
        '</div> </div>'
      );
    }
  }

}

function prendiIcona(data) {
  //sereno
  if (data.weather[0].icon == "01n" || data.weather[0].icon == "01d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon">' +
      '<div class="rays">' +
      '<div class="ray"></div>' +
      '<div class="ray"></div>' +
      '<div class="ray"></div>' +
      '<div class="ray"></div>' +
      '</div>' +
      '<div class="sun"></div>' +
      '</div>'
    );
  }
  //nuvoloso
  if (data.weather[0].icon == "02n" || data.weather[0].icon == "03n" || data.weather[0].icon == "04n" || data.weather[0].icon == "02d" || data.weather[0].icon == "03d" || data.weather[0].icon == "04d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon">' +
      '<div class="cloud2 small-cloud"></div>' +
      '<div class="cloud2"></div>' +
      '</div>'
    );
  }
  //pioggia
  if (data.weather[0].icon == "10n" || data.weather[0].icon == "09n" || data.weather[0].icon == "10d" || data.weather[0].icon == "09d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon">' +
      '<div class="cloud2"></div>' +
      '<div class="rain"></div>' +
      '</div>'
    );
  }
  //temporale
  if (data.weather[0].icon == "11n" || data.weather[0].icon == "11d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon" >' +
      '<div class= "cloud2"></div>' +
      '<div class="thunder">' +
      '<div class="bolt"></div>' +
      '<div class="bolt"></div>' +
      '</div> </div>'
    );
  }
  //nevica
  if (data.weather[0].icon == "13n" || data.weather[0].icon == "13d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon">' +
      '<div class="cloud2"></div>' +
      '<div class="snow">' +
      '<div class="flake"></div>' +
      '<div class="flake"></div>' +
      '<div class="flake"></div>' +
      '<div class="flake"></div>' +
      '</div> </div>'
    );
  }
  //nebbia
  if (data.weather[0].icon == "50d" || data.weather[0].icon == "50n") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon"> <div class="extreme text-center">' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '</div> </div>'
    );
  }
}


function meteoSettimanale(index) {
  for (i = 0; i < 25; i = i + 8) {
    document.getElementById("attivo" + i).setAttribute("class", "none");
  }
  document.getElementById("attivo" + index).setAttribute("class", "active");
  scriviDatiBySettimana(TEMP, index);

}

function meteoBySelezione(data, index) {
  prendiIconaBySettimana(data, index);
}


function prendiGeolocalizione() {
  let latText = document.getElementById("latitude");
  let longText = document.getElementById("longitude");

  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    cercaDatiGeolocalizzate(lat, lon);
  });
}

function prendiIconaBySettimana(data, index) {
  //sereno
  if (data.list[index].weather[0].icon == "01n" || data.list[index].weather[0].icon == "01d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon">' +
      '<div class="rays">' +
      '<div class="ray"></div>' +
      '<div class="ray"></div>' +
      '<div class="ray"></div>' +
      '<div class="ray"></div>' +
      '</div>' +
      '<div class="sun"></div>' +
      '</div>'
    );
  }

  //nuvoloso
  if (data.list[index].weather[0].icon == "02n" || data.list[index].weather[0].icon == "03n" || data.list[index].weather[0].icon == "04n" || data.list[index].weather[0].icon == "02d" || data.list[index].weather[0].icon == "03d" || data.list[index].weather[0].icon == "04d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon">' +
      '<div class="cloud2 small-cloud"></div>' +
      '<div class="cloud2"></div>' +
      '</div>'
    );
  }

  //pioggia
  if (data.list[index].weather[0].icon == "10n" || data.list[index].weather[0].icon == "09n" || data.list[index].weather[0].icon == "10d" || data.list[index].weather[0].icon == "09d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon">' +
      '<div class="cloud2"></div>' +
      '<div class="rain"></div>' +
      '</div>'
    );
  }

  //temporale
  if (data.list[index].weather[0].icon == "11n" || data.list[index].weather[0].icon == "11d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon" >' +
      '<div class= "cloud2"></div>' +
      '<div class="thunder">' +
      '<div class="bolt"></div>' +
      '<div class="bolt"></div>' +
      '</div> </div>'
    );
  }

  //nevica
  if (data.list[index].weather[0].icon == "13n" || data.list[index].weather[0].icon == "13d") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon">' +
      '<div class="cloud2"></div>' +
      '<div class="snow">' +
      '<div class="flake"></div>' +
      '<div class="flake"></div>' +
      '<div class="flake"></div>' +
      '<div class="flake"></div>' +
      '</div> </div>'
    );
  }

  //nebbia
  if (data.list[index].weather[0].icon == "50d" || data.list[index].weather[0].icon == "50n") {
    document.getElementById("icona-meteo").innerHTML = (
      '<div class="icon"> <div class="extreme text-center">' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '<div class="harsh-wind"></div>' +
      '</div> </div>'
    );
  }
}
