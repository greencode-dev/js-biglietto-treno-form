// Input:
const kmInput = prompt('Quanti chilometri vuoi percorrere?');
const ageImput = prompt('Quanti anni hai?');

// Elaborazione Dati:
const km = parseFloat(kmInput);
const age = parseInt(ageImput);

const priceForKm = 0.21;
const basePrice = km * priceForKm;
const discountRate = age < 18 ? 0.2 : age > 65 ? 0.4 : 0;
let finalPrice = (basePrice * (1 - discountRate)).toFixed(2);

// Output:
// Messaggio da visualizzare
const message = `
Riepilogo Costo Biglietto:
----------------
Chilometri da percorrere: ${kmInput} km
Età passeggero: ${ageImput} anni
Prezzo Base: €${basePrice.toFixed(2)}
Sconto applicato: ${discountRate * 100}%
Prezzo Finale: €${finalPrice}
----------------`;

// Stampa in Console:
console.log(message);

// Stampa in Pagina con formattazione HTML:
const output = document.getElementById('result');
output.innerHTML = `
Riepilogo Biglietto:<br>
----------------<br>
Chilometri da percorrere: ${kmInput} km<br>
Età passeggero: ${ageImput} anni<br>
Prezzo Base: €${basePrice.toFixed(2)}<br>
Sconto applicato: ${discountRate * 100}%<br>
Prezzo Finale: €${finalPrice}<br>
----------------`;
