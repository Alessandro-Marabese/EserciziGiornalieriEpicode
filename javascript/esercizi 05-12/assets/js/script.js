/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("ESERCIZIO 1");
function area(l1, l2) {
    return l1 *= l2;
}
const result1 = area(6, 12);
console.log("L'area del rettangolo è: " + result1);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("ESERCIZIO 2");
function crazySum(num1, num2) {
    if (num1 != num2) {
        return num1 + num2;
    } else {
        return (num1 + num2) * 3
    }
};
const result2 = crazySum(4, 4);
console.log("Il risultato è: " + result2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
console.log("ESERCIZIO 3");
function crazyDiff(x) {
    if (x < 19) {
        x - 19;
        return Math.abs(x - 19);
    } else if (x > 19) {
        (x - 19) * 3;
        return Math.abs(x - 19) * 3;
    } else { return "Errore, i due numeri sono uguali" }
};
const result3 = crazyDiff(8, 19);
console.log("Il risultato è: " + result3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
console.log("ESERCIZIO 4");
function boundary(n) {
    if (n === 400) {
        return "true";
    } else if ((n > 20) && (n < 100) && (n === 100)) {
        return "true";
    } else {
        return "false";
    }
};
const result4 = boundary(10);
console.log("Il valore restituito è: " + result4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("ESERCIZIO 5");
function epify(string) {
    let slice1 = string.slice(1, 7);
    if (slice1 !== "EPICODE") {
        return "EPICODE" + " " + string;
    } else if (slice1 === "EPICODE") {
        return string;
    }
}
const string2 = epify("EPICODE");
console.log("La frase finale è: " + string2);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("ESERCIZIO 6");
function check3and7(z) {
    if (z % 3 === 0) {
        return "Il valore " + z + " è multiplo di 3"
    } else if (z % 7 === 0) {
        return "Il valore " + z + " è multiplo di 7"
    } else if ((z % 3 === 0) && (z % 7 === 0)) {
        return "Il valore " + z + "  è multiplo sia di 3 che di 7"
    } else {
        return "Il valore " + z + " non è multiplo nè di 3 nè di 7"
    }
};
const result6 = check3and7(20);
console.log(result6);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*console.log("ESERCIZIO 7");
const string3 = "epicode";
function reverseString(string3) {
    str = string3.length
    for (let i = str - 1; i >= 0; i--) {
        string4 += string3[i];         
    }
    return string4
}
const string4 = reverseString();
console.log(string4);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*console.log("ESERCIZIO 8");
let string5 = "ciao a tutti"
function upperFirst(string5) {
    string6 = string5.
    return string6    
} 
const string6 = upperFirst();
console.log(string6);
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
console.log("ESERCIZIO 9");
string7 = "Ciao a tutti";
function cutString(string7) {
    let slice = string7.slice(1,);
    return slice;
};
const resultString = cutString();
console.log(resultString);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
console.log("ESERCIZIO 10");
arr = [];
function giveMeRandom(num3) {
    for (let i = 0; i <= num3; i++) {
        Math.floor(Math.random()*11);
        arr.push(Math.floor(Math.random()*11));        
    }    
    return arr;
}
const result10 = giveMeRandom(8);
console.log(result10);