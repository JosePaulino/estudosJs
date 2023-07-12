// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b){//função anonima
  console.log(a + b)
} 
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => { //Não utiliza o nome function
return a+ b
}
console.log(soma(2, 3))

// Arrow function Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(20, 5))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")