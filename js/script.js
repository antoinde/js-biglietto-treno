console.log('JS OK!');

const km = parseInt(prompt('Quanti km vuoi percorrere?'));
const age = parseInt(prompt('Quanti anni hai?'));
// prompt salva una stringa
// parseInt serve per trasformare la stringa in intero

let cost = km * 0.21;

if(age<18){
    cost = cost * 0.80; //sconto 20% per gli under18
}
if(age>65){
    cost = cost * 0.60; //sconto 40% per gli over65
}

alert('Prezzo del biglietto: ' + cost.toFixed(2) + ' euro');
// toFixed converte numeri in stringa tagliando i decimali