/*
console.log(typeof Object) //Função

class Produto {} //Toda class é uma Função
console.log(typeof Produto)
*/

//Função sem retorno 
function imprimirSoma(a, b){
  console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)//Resultato NaN
imprimirSoma(12, 3, 4, 5, 6, 7, 8)//Soma os dois primeiros e ignora o resto
imprimirSoma()

//Função com retorno
function soma(a, b = 1){//Tratando variavel (b=1) dando um valor, ela passa a ser o valor padrao como parametro.
  return a + b
}
console.log(soma(2, 30))
console.log(soma(2))
console.log(soma())