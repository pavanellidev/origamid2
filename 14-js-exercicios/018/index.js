// fetch('https://viacep.com.br/ws/11250734/json')
//   .then(res => res.text())
//   .then(data => document.querySelector('p').innerText = data)

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const cep = document.getElementById('cep')
const logradouro = document.getElementById('logradouro')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  fetch(`https://viacep.com.br/ws/${cep.value}/json`)
    .then(res => res.json())
    .then(data => {
      logradouro.innerText = data.logradouro
    })
})

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

fetch('https://blockchain.info/ticker')
  .then(res => res.json())
  .then((data) => {
    setInterval(() => {
      document.getElementById('bitcoin').textContent = `Bitcoin: R$ ${data.BRL.buy}`.replace('.', ',')
      console.log(data.BRL.buy)
    },1000 * 15)
  })


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
fetch('https://api.chucknorris.io/jokes/random')
  .then(res => res.json())
  .then(data => {document.getElementById('piada').textContent = data.value})

