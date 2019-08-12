var numero = 6;
var decimal = 4.5;
var texto = "helloworld";
var lista = ["Laranja", "Maca", "Limao", 1234];

alert (lista[0]);
alert (lista[3]);

//Laranja = 0, Maca = 1, Limao = 2, 1234 = 3.//

for (i in lista) {
    alert (i); //Aqui apresenta o numero de elementos que contem na variavel "lista".//
}

for (i in lista) {
    alert (lista [i]); //Aqui apresenta todos os alementos que estao na variavel "lista".// 
}