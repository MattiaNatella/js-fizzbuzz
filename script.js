/*
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Logica esercizio:

1.creazione variabili const per Fizz, Buzz e let per il messaggio da stampare
2.impostazione del ciclo che esegua 100 cicli
3.impostazione IF che riconosca quando un numero è multiplo di 3,, 5 o entrambi con modifica let messaggio in base al risultato
*/


for (let i = 1; i<= 100; i++) {
  let output = '';

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";

  console.log(output || i);
}

//soluzione vista da ChatGPT solo DOPO aver svolto autonomamente l'esercizio, per abituarmi già dall'inizio ad impostare un tipo di ragionamento che porti ad un risultato più compatto e ottimizzato possibile.
