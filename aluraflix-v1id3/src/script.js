var filme1 = "A Bela e a Fera";
var filme2 = "O rei leão";
var filme3 = "Mulan";
// fazendo com array
var lista = ["A bela e a Fera", "O Rei leão", "Mulan"];
var listaImagem = [
  "https://images-na.ssl-images-amazon.com/images/I/718bxXoq9gL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81G5DqNT2SL.jpg",
  "https://m.media-amazon.com/images/I/51h9cze2KUL.jpg"
];
for (var j = 0; j < listaImagem.length; j++) {
  document.write("<img src=" + listaImagem[j] + ">");
}
