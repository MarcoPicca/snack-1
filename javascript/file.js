// ? Chiediamo all'utente 3 numeri, li sommo e li mostro a schermo.



let numeroUno = parseInt( prompt ( "scrivi uno dei tre numeri e non chiederti il perchè" ) );

let numeroDue = parseInt( prompt ( "scrivi uno dei tre numeri e non chiederti il perchè" ) );

let numeroTre = parseInt( prompt ( "scrivi uno dei tre numeri e non chiederti il perchè" ) );

let sommaTotale = numeroUno + numeroDue + numeroTre;


document.getElementById('vedoSeHoCapito').innerHTML = 'la somma è ' + sommaTotale;