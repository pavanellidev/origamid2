const total = document.getElementById('total')
const preco = document.getElementById('preco')
const btn = document.getElementById('button')

let count = 0
let valor = 250

btn.addEventListener('click', () => {
  count = count + 1
  total.textContent = count
  preco.textContent = valor * count
})

