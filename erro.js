function tratarErroElancar(erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'mensagem'
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}

function imprirNomeGritado(obj){
  try{
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroElancar(e)
  } finally {
    console.log('final')
  }
}

const obj = { name: 'Roberto', idade: 12, end: 'rua nova'}
imprirNomeGritado(obj)
