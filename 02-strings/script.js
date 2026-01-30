// 1. Dichiarazione di variabili
// Crea una variabile chiamata name e assegnale il tuo nome.
/* const name = 'Francesca'; // Commento e cambio nome alla const perchè 'name' è deprecato */
const myName = 'Francesca';
// Stampa il valore di nome nella console.
console.log(myName);

// 2. Tipi primitivi
// Crea tre variabili chiamate number, text e bool e assegna rispettivamente
let number, text, bool;
// un numero, una stringa e un valore booleano.
number = 13;
text = 'tredici'; /* ma andrebbe bene anche '13' */
bool = false;
// Stampa tutti i valori nella console.
console.log(number);
console.log(text);
console.log(bool);
  // altra possibilità (che però trasforma tutto in una stringa)
  console.log(number + ' ' + text + ' '+ bool);
    // variazione sul tema (per giocare con nuove conoscenze)
    console.log(`number value is: ${number}`);
    console.log(`text value is: ${text}`);
    console.log(`number value is: ${number}`);

// 3. Sostituisci null nelle righe sottostanti utilizzando operazioni con le stringhe
// e le variabili sopra in modo da stampare correttamente 
// in console la stringa con il nome completo
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // NON MODIFICARE QUESTA RIGA
const firstName = 'Jane'; // NON MODIFICARE QUESTA RIGA
const lastName = 'Smith'; // NON MODIFICARE QUESTA RIGA

const fullName = firstName + " " + lastName;
console.log(fullName); // Output: "Jane Smith"

// 4. Imposta questa variabile utilizzando una proprietà
// sulla variabile alphabet per ottenere la sua lunghezza
const numberOfLettersInAlphabet = null;
console.log(numberOfLettersInAlphabet); // Output: 26