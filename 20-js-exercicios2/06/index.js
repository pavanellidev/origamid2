// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada 

const lista = document.querySelectorAll('li')

for (let item of lista) {
  item.classList.add('red')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window

console.log(window)

for (let key in window) {
  console.log(key + ': ' + window[key])
}