// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebTotal = 0;

transacoes.forEach((transacao) => {
  let valorCut = transacao.valor.slice(3, transacao.valor.length)
  let valorN = Number(valorCut)
  if(transacao.descricao.slice(0, 4) === 'Taxa'){
    taxaTotal = taxaTotal + valorN
  } else if (transacao.descricao.slice(0, 4) === 'Rece') {
    recebTotal = recebTotal + valorN
  }
})
console.log(taxaTotal + recebTotal)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';')
console.log(transportesArray)


// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const htmlArray = html.split('span')
const htmlNovo = htmlArray.join('a')
console.log(htmlNovo)

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length -1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];


taxaTotal2 = 0

transacoes2.forEach((item) => {
  item = item.toLowerCase()
  item = item.trim()
  item = item.slice(0,4)
  if(item === 'taxa') {
    taxaTotal2++
  }
})

console.log(taxaTotal2)

console.log(Math.floor(Math.random() * 10 + 1))
