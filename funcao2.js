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

const getArea = (length,  width ) => length * width;
console.log(getArea(5));

const airplanes = {
 brand: "Airbus",
 model: "A300",
 engine: 'Pratt & Whitney',
};
const {
 brand,
 model,
 engine:  engineBrand ,
} = airplanes;
console.log(brand, model, engineBrand);
