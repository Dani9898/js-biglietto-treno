let elemento = document.getElementById("my-id");

// chiediamo all'utente il numero di km che vuole percorrere e l'età del passeggero. In base a ciò calcolare il prezzo totale del viaggio secondo alcune regole: il prezzo del biglietto è definito in base ai km (0.21 € al km), sconto del 20% per i < 18 anni, sconto del 40% per i > 65 anni. La stampa del prezzo finale va fuori in forma umana (con massimo 2 decimali per indicare i centesimi)

// chiediamo all'utente il n di km
let numeroKmcorretto;
let nKm = parseInt(prompt("Ciao, inserisci il numero di chilometri che vuoi fare:"));

if (isNaN(nKm) == true) {
    numeroKmcorretto = parseInt(prompt("Per favore inserisci un valore numerico corretto"));
    nKm = numeroKmcorretto;
}

console.log(nKm);

// chiediamo all'utente la sua età
let etàCorretta;
let età = parseInt(prompt("Quanti anni hai?"));

if (isNaN(età) == true) {
    etàCorretta = parseInt(prompt("Per favore inserisci un valore numerico corretto"));
    età = etàCorretta;
}

console.log(età);

// calcoliamo il prezzo del biglietto
const prezzo1Km = 0.21;
let prezzoBiglietto = nKm * prezzo1Km;

if (età < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8;
} else if (età > 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
}

console.log(prezzoBiglietto);

// stampiamo il prezzo del biglietto
elemento.innerHTML = `Il costo del biglietto è di: ${prezzoBiglietto.toFixed(2)} €.`;