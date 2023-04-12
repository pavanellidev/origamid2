// fetch('https://ranekapi.origamid.dev/json/api/produto')
//   .then(res => res.json())
//   .then(data => console.log(data))

// async function fetchProdutos(url) {
//   const response = await fetch(url)
//   const json = await response.json()
//   return json
// }

// const produtos = fetchProdutos('https://ranekapi.origamid.dev/json/api/produto')

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFiltro = precos.filter((preco) => {
  return preco.includes('R$')
})

const precosNumeros = precosFiltro.map((preco) => {
  return Number(preco.replace('R$ ', ''))
})

console.log(precosFiltro)
console.log(precosNumeros)