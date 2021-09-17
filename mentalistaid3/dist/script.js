var numeroSecreto = Math.round(Math.random, 1);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  var frase = document.getElementById("resultado");

  if (chute == numeroSecreto) {
    frase.innerHTML = "O chute está certo!";
    console.log("O chute está certo!");
  } else {
    frase.innerHTML = "Errou o chute, tente novamente.";
    console.log("Errou o chute, tente novamente.");
  }
}

// <h2 class="resultado" id="resultado"></h2>