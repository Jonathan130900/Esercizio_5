/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 1");

var number1 = 7;
var number2 = 3;

if (number1 > number2) {
  console.log(number1 + " è maggiore di " + number2);
} else {
  console.log("Assolutamente non corretto");
}

console.log("----------------------------------");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");

var numberExample1 = 9;
var numberFive = 5;

if (numberExample1 !== numberFive) {
  console.log("Not equal");
}

console.log("----------------------------------");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");

var divisibleNumber = 50;
var result = divisibleNumber % numberFive;

if (result === 0) {
  console.log("Divisibile per 5");
}

console.log("----------------------------------");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");

var minusNumber = 15;
var minusResult = minusNumber - number1;

if (minusResult) {
  console.log("Il risultato è " + minusResult);
}

console.log("----------------------------------");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");

var totalShoppingCart = 50;
var spedizione = 10;

if (totalShoppingCart >= 50) {
  console.log("Totale = " + totalShoppingCart + "€ " + "Spedizione gratuita!");
} else {
  console.log(
    "Totale = " +
      (totalShoppingCart + spedizione) +
      "€ " +
      "10 Euro di spedizione"
  );
}

console.log("----------------------------------");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");

var totalShoppingCart = 50;
var spedizione = 10;
var blackFriday = totalShoppingCart * 0.2;
var totalShoppingCartSconto = totalShoppingCart - blackFriday;

console.log(totalShoppingCartSconto);

if (totalShoppingCartSconto >= 50) {
  console.log(
    "Totale = " + totalShoppingCartSconto + "€ " + "Spedizione gratuita!"
  );
} else {
  console.log(
    "Totale = " +
      (totalShoppingCartSconto + spedizione) +
      "€ " +
      "10 Euro di spedizione"
  );
}

console.log("----------------------------------");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");

var numberOrder = [5, 7, 1];

console.log("Numeri non in ordine " + numberOrder);

numberOrder.sort(function (a, b) {
  return a - b;
});

console.log("Numeri in ordine " + numberOrder);

console.log("----------------------------------");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");

var typeVar = "9";

if (typeof typeVar === "number") {
  console.log("typeVar è un numero!")
} else if (typeof typeVar === "string") {
  console.log("typeVar è una stringa!")
};

console.log("----------------------------------");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");

var number3 = 71;

if (number3 % 2 === 0) {
  console.log("Questo è un numero pari!")
} else {
  console.log("Questo è un numero dispari!")
};

console.log("----------------------------------");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10");

let val = 7
if (val < 5) {
  console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  };

  console.log("----------------------------------");

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 11");

console.log(me);
me.city = "Toronto";
console.log(me);

console.log("----------------------------------");

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 12");

delete me.city;
console.log(me);

console.log("----------------------------------");

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 13");

me.skills.pop();
console.log(me.skills);

console.log("----------------------------------");

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 14");

let numbers = [];
let i = 1;
while (i <= 10) {
  numbers.push(i);
  i++;
}
console.log(numbers);


console.log("----------------------------------");

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 15");

numbers[numbers.length - 1] = 100;

console.log(numbers);
