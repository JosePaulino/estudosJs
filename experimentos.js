let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports) // modele.exports = { e: 456, f: false, g: 'teste}

// cria uma variavel sem va e let!
abc = 3
console.log(global.abc) // cuidade essa variavel fica como global