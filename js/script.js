const buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( 'click',
function() {


  const inputNome = document.getElementById("nome-utente");
  const nomeUtente = inputNome.value;
  console.log("L'utente si chiama: " + nomeUtente);

  const inputKm = document.getElementById("km");
  const ChilometriDaFare = parseInt(inputKm.value);
  console.log("L'utente vuole percorrere: " + ChilometriDaFare + "km");

  const inputEta = document.getElementById("fascia-eta");
  const eta = inputEta.value;
  console.log("L'utente è: " + eta )

  let prezzoAlChilometro = 0.21;
  const prezzoBigliettoSenzaSconto = prezzoAlChilometro * ChilometriDaFare;
  console.log(prezzoBigliettoSenzaSconto);

  let offerta = "Tariffa Standard"

  if (eta == "minorenne") {
    ((prezzoBigliettoSenzaSconto / 100) * 80);

    offerta = "Sconto Minorenne";

   } else if (eta == "over65") {
    ((prezzoBigliettoSenzaSconto / 100) * 60);

    offerta = "Sconto Silver";

   } else {
    (prezzoBigliettoSenzaSconto);
   }
 
   let carrozza = Math.floor(Math.random() * 9) +1;
   let cp = Math.floor(100000 + Math.random() * 900000); 
 
 
   document.getElementById('nome-passegero').innerHTML = nomeUtente;
   document.getElementById('offerta').innerHTML = offerta;
   document.getElementById('carrozza').innerHTML = carrozza;
   document.getElementById('codice-cp').innerHTML = cp;
   document.getElementById('costo-biglietto').innerHTML = prezzoBigliettoSenzaSconto.toFixed(2) + ' €';


   const bigliettoDiv = document.getElementById('biglietto');
    bigliettoDiv.classList.remove('hide');
    bigliettoDiv.classList.add('show');

    }

);


const buttonAnnulla = document.getElementById('annulla');
        buttonAnnulla.addEventListener( 'click',
        function() {
            document.getElementById('nome-passegero').innerHTML = '';
            document.getElementById('offerta').innerHTML = '';
            document.getElementById('carrozza').innerHTML = '';
            document.getElementById('codice-cp').innerHTML = '';
            document.getElementById('costo-biglietto').innerHTML = '';


            document.getElementById('km').value = '';
            document.getElementById("fascia-eta").value = '';
            document.getElementById("nome-utente").value = '';
            
            const bigliettoDiv = document.getElementById('biglietto')
            bigliettoDiv.classList.remove('show');
            bigliettoDiv.classList.add('hide');
  }
);