
function getDati(){
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  var citta = document.getElementById("luogonascita").value;
  var genere="";
  if(document.getElementById("option-uomo").checked){
    genere="M";
  }else{
    genere="F";
  }
  var datacompleta = document.getElementById('data').value;
  document.getElementById('risultato').innerHTML = calcolaCodiceFiscale(nome,cognome,citta,genere,datacompleta);
}



function calcolaCodiceFiscale(name, surname, city, gender, date) {
    // 0 - 2
    let CodiceFiscale = (surname.toUpperCase().replaceAll(/[AIUEO ']/gi, "") + surname.toUpperCase().replaceAll(/[^AIUEO]/gi, "") + "XX").slice(0, 3);
    // 3 - 5
    let consonanti = name.toUpperCase().replaceAll(/[AIUEO ']/gi, "");
    CodiceFiscale += consonanti.length > 3 ? consonanti[0] + consonanti.slice(2, 4) : (consonanti + name.toUpperCase().replaceAll(/[^AIUEO]/gi, "") + "XX").slice(0, 3);
    // 6 - 7
    CodiceFiscale += date.split("-")[0].slice(-2);
    // 8
    CodiceFiscale += "ABCDEHLMPRST"[parseInt(date.split("-")[1]) - 1];
    // 9 - 10
    CodiceFiscale += gender === "M" ? date.split("-")[2] : parseInt(date.split("-")[2]) + 40
    // 11 - 14
    CodiceFiscale += city;
    // 15
    let caratteriDispari = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21, A: 1, B: 0, C: 5, D: 7, E: 9, F: 13, G: 15, H: 17, I: 19, J: 21, K: 2, L: 4, M: 18, N: 20, O: 11, P: 3, Q: 6, R: 8, S: 12, T: 14, U: 16, V: 10, W: 22, X: 25, Y: 24, Z: 23 };
    let CIN = [...Array(15).keys()].map(index => index % 2 ? CodiceFiscale[index].charCodeAt(0) - (CodiceFiscale[index].match(/[A-Z]/ig) ? 65 : 48) : caratteriDispari[CodiceFiscale[index]]).reduce((a, b) => a + b, 0);
    CodiceFiscale += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[CIN % 26];

    return CodiceFiscale;
}
