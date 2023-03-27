// const frases = ['Oi', 'Oi, tudo bem?', 'Tudo e você?', 'Tudo blz']

// for(let i  = 0; i <= frases.length; i++) {
//   setTimeout(() => {
//     console.log(frases[i])
//   }, 800 * i)
// }

// function mudarClasse() {
//   document.body.classList.toggle('active')
// }

// setInterval(mudarClasse, 1000)

const iniciarEl = document.getElementById('iniciar')
const pausarEl = document.getElementById('pausar')
const resetarEl = document.getElementById('resetar')

iniciarEl.addEventListener('click', cronometrar)
pausarEl.addEventListener('click', pausar)
resetarEl.addEventListener('click', resetar)

// function cronometrar() {
//   for (let i = 0; i <= 10; i++) {
//     setTimeout(() => {
//       document.querySelector('p').textContent = i
//     }, 1000 * i)
//   }
// }

// function resetar() {
//   document.querySelector('p').textContent = 0
// }

let i = 0
let timer

function cronometrar() {
  timer = setInterval(() => {
    document.querySelector('p').textContent = i++
  }, 1000)
  iniciarEl.setAttribute('disabled', '')
}

function pausar() {
  clearInterval(timer)
  iniciarEl.removeAttribute('disabled')
}

function resetar() {
  document.querySelector('p').textContent = 0
  i = 0
}

