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


var lettere = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var numeri = ['0','1','2','3','4','5','6','7','8','9'];


//Funzione per generare codice unicode
function randomUnicode () {
  var randomCode = [];
  //ciclo 3 volte all'interno dell'array lettere per selezionare 3 lettere random
  for (var i = 0; i < 3; i++) {

    //genero un valore random all'interno della lunghezza dell'array "lettere"
    var randomLetter = Math.floor(Math.random() * lettere.length);
    //verifico che la lettera non sia già presente nell'array "randomCode"
    if (! randomCode.includes(lettere[randomLetter]) && randomCode.length < 6) {
      //push dell'elemento [randomLetter], contenuto all'interno dell'array "letter", all'interno dell'array "randomCode"
      randomCode.push(lettere[randomLetter]);
    } else {
      //altrimenti genero un altra lettera random
      randomLetter = Math.floor(Math.random() * lettere.length);
    }
  }

  for (var j = 0; j < 3; j++) {

    //genero un valore random compreso tra 0 e 9
    var numero = randomNumber(0,9);
    //verifico che il numero non sia già presente nell'array "randomCode"

    if (randomCode.includes(numero) && randomCode.length < 6) {
      //se il numero è già incluso nell'array, genero un altro numero random
      numero = randomNumber(0,9);

    } else if (!randomCode.includes(numero) && randomCode.length < 6){
      //se il numero non è già incluso nell'array
      //push dell'elemento randomNumber() all'interno dell'array "randomCode"
      randomCode.push(numero);
    }
  }
  return randomCode.join('')
}

//Funzione per generare numeri random
function randomNumber (min, max) {
  var random = Math.floor(Math.random() * (max - min + 1 ) + min);
  return random
}



// var giocatore = {
//   'unicode': randomUnicode(),
//   'punti': randomNumber (0, 120),
//   'rimbalzi': randomNumber (0, 60),
//   'falli': randomNumber (0, 5),
//   'tiri_2pt': percent2pt,
//   'tiri_3pt': percent3pt
// }

// console.log(randomUnicode());

//inizializzo la variabile per determinare il numero di giocatori
var giocatori = 100;
var data_giocatori;
var array_giocatori = [];
//inizializzo un ciclo for per inserire 100 giocatori nella lista
for (var i = 0; i < giocatori; i++) {
  //genero una percentuale random
  var percent2pt = (randomNumber(0,1000)/10).toFixed(1);
  var percent3pt = (100 - percent2pt).toFixed(1);
  //salvo il giocatore appena generato all'interno della lista_giocatori
  data_giocatori = {
    'unicode': randomUnicode(),
    'punti': randomNumber (0, 120),
    'rimbalzi': randomNumber (0, 60),
    'falli': randomNumber (0, 5),
    'tiri_2pt': percent2pt,
    'tiri_3pt': percent3pt,
    'classe-lista': 'player'
  };

  array_giocatori.push(data_giocatori);

  var template_lista = $('#template-lista').html();
  // console.log(template_lista);
  var t_lista = Handlebars.compile(template_lista);
  var html = t_lista(data_giocatori);
  // console.log(data_giocatori);
  $('.giocatori .lista ul').append(html);

  // var template_statistica = $('#template-statistica').html();
  // var statistica = Handlebars.compile(template_statistica);
  // var html_2 = statistica(data_giocatori);
  //
  // // console.log(html_2);
  //
  // $('.right .statistiche').append(html_2);
}

//intercetto il click sul singolo nome {
$('ul .player').click(function(){
  var nomeUnivoco = $(this).text();
  //nascondo tutte le statistiche al click
  $('.statistica').hide();
  //controllo tutti i codici di tutte le schede Giocatore
  for (var i = 0; i < array_giocatori.length; i++) {
    //all'inizio del ciclo il contenitore right è vuoto
    var giocatore_corrente = array_giocatori[i];
    // console.log(array_giocatori[i].unicode);
    if (nomeUnivoco == giocatore_corrente.unicode) {
      var template_statistica = $('#template-statistica').html();
      var statistica = Handlebars.compile(template_statistica);
      var html_2 = statistica(giocatore_corrente);
      //aggiungo la classe active solo alla statistica che corrisponde con la ricerca
      var nuovo = $('.right .statistiche').append(html_2).find('.statistica').toggleClass('active');
    }

  }

});
