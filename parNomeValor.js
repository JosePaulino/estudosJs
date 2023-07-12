// Par nome/valor
const saudacao = "opa" // contexto lexo 1

function exec(){
  const saudacao = "fala" // contexto lexico 2
  return saudacao
}

// objetos sao grupos aninhados de pares nome/valor
const cliente = {
  nome: "pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logadouro: "Rua muito legal",
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

