function Converter() {
  var valorElemento = document.getElementById("valor");

  var elementoValorConvertido = document.getElementById("valorConvertido");

  elementoValorConvertido.innerHTML =
    "O valor de " +
    valorElemento.value +
    " reais é de: " +
    valorElemento.value / 5.24 +
    " dólares";
}
