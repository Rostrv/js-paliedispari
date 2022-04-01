/*Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma*/
let parola = prompt("Inserisci una parola");

if (parola == palindroma(parola)) {
    console.log("Palindroma")
} else {
    console.log("Non è palindroma")
}

function palindroma(parola) {
    let parolaReverse = "";

    for (let i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i];
    }

    return parolaReverse
}