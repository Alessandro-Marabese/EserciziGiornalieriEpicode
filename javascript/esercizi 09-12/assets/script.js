/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("ESERCIZIO 1");
function strFunc(x, y) {
    let str1 = x.slice(0, 2);
    let str2 = y.slice(-3);
    let str3 = str1 + str2;
    return str3.toUpperCase();
}
let strResult = strFunc("epicode", "developer");
console.log(strResult);

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("ESERCIZIO 2");
function randomNum(n) {
    let arrNum = [];
    for (i = 0; i < n; i++) {
        let random = (Math.floor(Math.random() * 101));
        arrNum.push(random);
    }
    return arrNum;
}
arrNum = randomNum(10);
console.log(arrNum);

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("ESERCIZIO 3");
const arrNum1 = [2, 5, 17, 3, 75, 43, 50, 6, 18];
const evenNumbers = arrNum1.filter(element => (element % 2) === 0);
console.log(evenNumbers);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 4");
const arrNum2 = [2, 5, 17, 3, 75, 43, 50, 6, 18];
const sum = (arrNum2) => {
    let result = 0;
    arrNum2.forEach(element => result += element);
    return result;
}
console.log(sum(arrNum2));

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 5");
const arrNum3 = [2, 5, 17, 3, 75, 43, 50, 6, 18];
const sum1 = arrNum3.reduce((acc, num) => acc + num, 0);
console.log(sum1);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("ESERCIZIO 6");
const arrNum4 = [2, 5, 17, 3, 75, 43, 50, 6, 18];
let n = 3
const newArray = arrNum4.map((element) => (n + element));
console.log(newArray);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("ESERCIZIO 7");
function arrstrFunc(arr) {
    return arr.map(ele => ele.length)
};
console.log(arrstrFunc(["Epicode", "is", "great"]));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("ESERCIZIO 8");
oddNumbers = [];
function oddFunc(n) {
    for (i = 1; i < n; i++) {
        if ((i % 2) !== 0) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}
oddNumbers = oddFunc(100);
console.log(oddNumbers);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
    {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Endgame',
        Year: '2019',
        imdbID: 'tt4154796',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("ESERCIZIO 9");
function oldFilm() {
    let film = {Year: 5000};
    movies.forEach(film => {
        if(Film.Year > film.Year) {
            Film = film
        }
    })
}
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 10");

function filmFunc() {
    return movies.length;
}
let len = filmFunc();
console.log(len);
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 11");
let titleList = [];
titleList = movies.map(movies => movies.Title)
console.log(titleList)

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("ESERCIZIO 12");
const newFilms = movies.filter((movies) => (movies.Year.charAt(0) === "2"));
console.log(newFilms);

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 13");
const sumYears = movies.reduce((acc, movies) => acc + parseInt(movies.Year), 0);
console.log(sumYears);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("ESERCIZIO 14");
const findMov = movies.find(movies => movies.imdbID === "tt4154756");
console.log(findMov);

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("ESERCIZIO 15");
const findFilm = movies.findIndex(movies => movies.Year === "2019");
console.log(findFilm)