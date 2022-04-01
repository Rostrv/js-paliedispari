/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

let pari_o_dispari = prompt('scegli pari o dispari')
console.log(pari_o_dispari)
let numero_giocatore = parseInt(prompt('inserisci un numero da 1 a 5'))
console.log(numero_giocatore)

let numero_pc = random_number(1, 5)

function random_number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
console.log(numero_pc)

let somma = (numero_giocatore + numero_pc)


if (somma % 2 == 0) {
    console.log('pari')
} else {
    console.log('dispari')
}