/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
console.log("I principali datatype di Javascript sono 5: stringhe, numeri, dati Booleani, null e undefined.")
console.log("Le stringhe possono essere una lettera, una parola o un insieme di parole e vengono racchiuse dalle doppie virgolette.")
console.log("I numeri possono essere interi o con cifre dopo la virgola che in questo caso è sostituita da un punto.")
console.log("I dati Booleani, invece, possono avere solo due valori che sono vero o falso.")
console.log("Il dato null è un valore che è stato intenzionalmente tolto da una variabile.")
console.log("Il dato undefined indica che quella variabile non è mai stata inizializzata con un valore.")

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = "Alessandro";
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let num1 = 12;
let num2 = 20;
console.log(num1 + num2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Marabese";
console.log(myName);
/*const name = "Giorgio"
name = "Marco"
console.log(name)*/
/*Definendo una costante name con un determinato valore e provando a cambiare il nome della costante in questo modo, dalla console uscirà un messaggio di errore,
 dato che la costante ha un valore fisso che non può essere modificato*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log(4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
console.log(name1 === name2);
console.log(name1 === name2.toLowerCase())

