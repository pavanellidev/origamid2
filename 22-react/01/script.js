const menu = {
  seletor: '.principal'
}

console.log(menu.seletor.toUpperCase())

function upperName(name) {
  return name.toUpperCase()
}

console.log(upperName('andre'))

const lowerName = (name) => {
  return name.toLowerCase()
}

console.log(lowerName('ANDRE'))

function handleMouse(event) {
  const { clientX, clientY } = event
  console.log(clientX, clientY)
}

document.addEventListener('click', handleMouse)