//exercitiul 1
var notaExamen = 6;
//console.log(notaExamen);

if (notaExamen >= 5) {
    console.log ('Admis');
} else {
    console.log ('Respins');
}

//exercitiul 2

var a = 8;
var b = 11;
var c = 4;

if (a > b && a > c) {
    console.log (a);
} else if ( b > a && b > c) {
    console.log (b);
} else if ( c > a && c > b) {
    console.log (c);
} else {
    console.log ('eroare')
}

//exercitiul 3

var currentDayNumber = 5;
//console.log (currentDayNumber);

if (currentDayNumber == 1) {
    console.log ('astazi este luni');
} else if (currentDayNumber == 2) {
    console.log ('astazi este marti');
} else if (currentDayNumber == 3) {
    console.log ('astazi este miercuri');
} else if (currentDayNumber == 4) {
    console.log ('astazi este joi');
} else if (currentDayNumber == 5) {
    console.log ('astazi este vineri');
} else if (currentDayNumber == 6) {
    console.log ('astazi este sambata');
} else if (currentDayNumber == 7) {
    console.log ('astazi este duminica');
} else {
    console.log ('nu este o zi a saptamanii');
}

//exercitiul 3

switch (currentDayNumber) {
    case 1: 
        console.log('luni');
        break;
    case 2:
        console.log('marti');
        break;
    case 3:
        console.log('miercuri');
        break;
    case 4:
        console.log('joi');
        break;
    case 5:
        console.log('vineri');
        break;
    case 6:
        console.log('sambata');
        break;
    case 7:
        console.log('duminica');
        break;
    default: 
        console.log('ziua nu este corecta');
}

//exercitiul 4

for (var number = 100; number >= 1; number = number - 1)
console.log(number)




