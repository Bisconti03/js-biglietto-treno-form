const buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( 'click',
function() {


  const inputNome = document.getElementById("nome-utente");
  const nomeUtente = inputNome.value;
  console.log(nomeUtente);

  const inputKm = document.getElementById("km");
  const percorrenza = parseInt(inputKm.value);
  console.log(percorrenza);

  const inputEta = document.getElementById("fascia-eta");
  const eta = inputEta.value;
  console.log(eta);

    }

);