/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("ESERCIZIO 1")
let num1 = 20;
let num2 = 20;
if (num1 > num2) {
  console.log("Il valore più grande è " + num1)
} else if(num2 > num1) {
  console.log("Il valore più grande è " + num2)
} else {
  console.log("I due numeri sono uguali")
}
console.log("*******************");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("ESERCIZIO 2");
let num3 = 7;
if (num3 !== 5) {
  console.log("not equal a 5")
};
console.log("*******************");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
console.log("ESERCIZIO 3");
let num4 = 5;
let x = num4 % 5;
if (x === 0) {
  console.log("Il numero è divisibile per 5")
};
console.log("*******************");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("ESERCIZIO 4");
let num5 = 4;
let num6 = 5;
if (num5 === 8 || num6 === 8 || (num5+num6) === 8 || (num5-num6) === 8 || (num6-num5) === 8) {
  console.log("Uno dei due valori corrisponde a 8 oppure la loro addizione/sottrazione corrisponde a 8")
} else {
  console.log("Nessuno dei due numeri è pari a 8 nè la loro addizione o sottrazione è pari a 8")
};
console.log("*******************");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("ESERCIZIO 5");
let totalShoppingCart = 10;
const speditionCost = 10;
if (totalShoppingCart < 50) {
  totalShoppingCart += speditionCost;
  console.log("L'ammontare finale del checkout sarà: " + totalShoppingCart);
  console.log("Nel checkout finale sono state incluse le spese di spedizione");
} else {
  console.log("L'ammontare finale del checkout sarà: " + totalShoppingCart);
  console.log("Non sono state incluse spese di spedizione")
};
console.log("*******************");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
console.log("ESERCIZIO 6");
let totalShoppingCart2 = 40;
let discount = 0.8;
const speditionCost2 = 10;
if (totalShoppingCart2 < 50) {
  totalShoppingCart2 *= discount;
  totalShoppingCart2 += speditionCost2;
  console.log("L'ammontare finale del checkout sarà: " + totalShoppingCart2);
  console.log("Nel checkout finale sono state incluse le spese di spedizione");
} else {
  totalShoppingCart2 *= discount;
  console.log("L'ammontare finale del checkout sarà: " + totalShoppingCart2);
  console.log("Non sono state incluse spese di spedizione")
};
console.log("*******************");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
console.log("ESERCIZIO 7");
let y = 10;
let z = 15;
let b = 20;
if(z >= y) {
  if(b >= z) {
    console.log(b, z, y)
  } else {
    if(b >= z) {
      console.log(y,b,z)
    } else {
      console.log(y, z, b)
    }
  }
} else {
  if(b >= z) {
    console.log(b, z, y)
  } else {
    if(b >= y) {
      console.log(z, b, y)
    } else {
      console.log(z, y, b)
    }
  }
}
console.log("*******************");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
console.log("ESERCIZIO 8");
let valore = true;
if(typeof valore === "number") {
  console.log("Ho un numero")
} else if(typeof valore === "string") {
  console.log("Ho un stringa")
} else if(typeof valore === "boolean") {
  console.log("Ho un valore booleano")
}
console.log("*******************");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("ESERCIZIO 9");
let num7 = 4;
let a = num7 % 2;
console.log(num7);
if (a === 0) {
  console.log("Il numero è pari")
} else {
  console.log("Il numero è dispari")
};
console.log("*******************");

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
console.log("ESERCIZIO 10");
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
}
if (val < 8) {
  console.log("Meno di 8");
}
if(val >= 7) {
  console.log("Uguale a 7 o maggiore");
};
console.log("*******************");
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}*/
console.log("ESERCIZIO 11");
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};
console.log("Questo è il mio oggetto iniziale;");
console.log(me);
me.city = "Toronto";
console.log("Questo è il mio oggetto finale:");
console.log(me);
console.log("*******************");

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
console.log("ESERCIZIO 12");
const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};
console.log("Questo è il mio oggetto iniziale:");
console.log(me2);
delete me2.lastName;
console.log("Questo è il mio oggetto finale:");
console.log(me2);
console.log("*******************");

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
console.log("ESERCIZIO 13");
const skills = ['javascript', 'html', 'css']
console.log("Questo è il mio array iniziale:");
console.log(skills);
skills.pop();
console.log("Questo è il mio array finale:");
console.log(skills);
console.log("*******************");

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
console.log("ESERCIZIO 14");
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Questo è il mio array di numeri:");
console.log(numbers);
console.log("*******************");

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
console.log("ESERCIZIO 15");
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Questo è il mio array di numeri iniziale:");
console.log(numbers);
numbers.splice(9, 1, 100);
console.log("Questo è il mio array di numeri finale:");
console.log(numbers);
console.log("*******************");