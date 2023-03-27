const promessa = new Promise(function(resolve, reject){
  let condicao = true
  if(condicao) {
    setTimeout(() => {
      resolve('Deu certo')
    },2000)   
  } else {
    reject(Error('Um erro aconteceu'))
  }
})

promessa.then(resolucao => console.log(resolucao))

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados')
  }, 500)
})

const carregouTudo = Promise.race([login, dados])

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})