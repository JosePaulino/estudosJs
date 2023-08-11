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

const conferenceInformation = {
 attendees: 200,
 location: "6203 North 100st",
 days: 3,
};

function getScholarshipsQty({
  attendees 
}) {
 const scholarshipsQty = attendees * 0.1;
 console.log(`The scholarships quantity are ${scholarshipsQty}.`);
}
getScholarshipsQty(conferenceInformation);

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


const challengeGreeting = (name) => {
 const generalMessage = "Hello, " +
  name +
  "! Welcome to Terrace Inn & Suites!";
 const seasonalMessage =
  "Need to cool off? Visit one of our three resort pools!";
 return generalMessage + " " +
  seasonalMessage;
};
console.log(challengeGreeting(
"Sarah")); 


  const flavors = ["chocolate", "vanilla", "strawberry"];
const lengths = flavors.map(function( element ) {
 console.log(element);
});


const weather = [67, 78, 73, 77, 82, 93];
const shortSleeveDay = weather.filter(function(temp) {
  return  temp > 75;
});
console.log(shortSleeveDay);
