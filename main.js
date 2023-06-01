const age = parseInt(prompt('cual es tu edad?'));
const getTown = prompt('Vives en un municipio fronterizo?');
const embarazo = prompt('estas embarazada?');
const semanas = parseInt (prompt('Cuantas semanas de embarazo tienes?'));
const year = prompt('Cumples este año 30 o màs?')

const isAdult = age >= 18;
const isFrontierTown = getTown.toLowerCase() === 'si';
const preñada = embarazo.toLowerCase() === 'si';
const semana = semanas > 9;
const yea = year.toLowerCase() === 'si';

if (isAdult && isFrontierTown) {
    document.write('te puedes vacunar!');
} 
else if(isAdult&&preñada&&semana) {
    document.write('te puedes vacunar!')
} 
else if(age >= 30 || year ==='si') {
    document.write('no te puedes vacunar!');
}
else{
    document.write('No te  puedes vacunar');
}
20