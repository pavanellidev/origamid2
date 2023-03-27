export default function initFetchBitcoin() {

}

fetch("https://blockchain.info/ticker")
  .then(res => res.json())
  .then(data =>  {
    const btcPreco = document.querySelector('.btc-preco')
    btcPreco.innerText = (100 / data.BRL.sell).toFixed(5)
  }).catch(erro => {
    console.log(Error(erro))
  })

// https://blockchain.info/ticker