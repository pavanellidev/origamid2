class Veiculo {
  constructor(rodas) {
    this.rodas = rodas
  }
  acelerar() {
    console.log('Acelerou')
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log('Moto empinou ' + this.rodas + ' rodas')
  }
}

const civic = new Veiculo(4)
const honda = new Moto(2)
honda.empinar()
honda.acelerar()