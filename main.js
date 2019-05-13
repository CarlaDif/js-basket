/*
Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket
per una giornata di campionato.
In particolare vanno generate per ogni giocatore le seguenti informazioni,
facendo attenzione che il numero generato abbia senso:
- Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
- Numero di punti fatti
- Numero di rimbalzi
- Falli
- Percentuale di successo per tiri da 2 punti
- Percentuale di successo per tiri da 3 punti
Tutti i giocatori verranno visualizzati tramite il loro codice (in una select, una lista, …).
Una volta cliccato sul codice giocatore,
nel corpo principale verranno visualizzate le statistiche corrispondenti.
*/

//creo l'oggetto player, corrispondente al singolo giocatore e contenente le sue info personali
var player = {
  'playerCode': casualCode(),
  'points': casualPoints(),
  'rebound': casualRebounds(),
  'fouls': casualFouls(),
  'percent_2pt': casualPercent_2pt(),
  'percent_3pt': casualPercent_3pt()
};

console.log(player);

//genero randomicamente i valori delle singole proprietà
//funzione per generare codice composto da 3 lettere maiuscole e 3 numeri
function casualCode () {
  //array con le lettere possibili
  var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numbers = ['0','1','2','3','4','5','6','7','8','9']
  var randomCode = [];

  //ciclo for per determinare le 3 lettere random
  for (var i=0; i<3; i++) {
    var randomLetter = Math.floor(Math.random() * letters.length);
    randomCode.push(letters[randomLetter]);
  }
  for (var j=0; j<3; j++) {
    var randomNumber = Math.floor(Math.random() * numbers.length);
    randomCode.push(numbers[randomNumber]);
  }
  return randomCode.join('');
}
console.log(casualCode());

//funzione per generare numero di punti casuale
function casualPoints () {
  var point = Math.floor(Math.random() * 120);
  return point
}

//funzione per generare numero di rimbalzi casuale
function casualRebounds () {
  var rebound = Math.floor(Math.random() * 60);
  return rebound
}

//funzione per generare numero random di falli tecnici
function casualFouls () {
  var foul = Math.floor(Math.random() * 40);
  return foul
}

//funzione per generare percentuale casuale di tiri da 2 punti
function casualPercent_2pt () {
  var percent_2pt = Math.floor(Math.random() * 1000 ) /10;
  return percent_2pt
}

//funzione per generare percentuale casuale di tiri da 2 punti
function casualPercent_3pt () {
  var percent_3pt = Math.floor(Math.random() * 1000 ) /10;
  return percent_3pt
}

//aggiungo le proprietà all'oggetto Giocatore

//ripeto per 100 volte questa operazione
