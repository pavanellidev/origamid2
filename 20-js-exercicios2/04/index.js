// const carro = {
//   marca: 'Honda',
//   ano: 2018,
// }

// const {marca, ano} = carro

// console.log(marca, ano)

// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);

const { backgroundColor, color, margin } = btnStyles

console.log(backgroundColor, margin)

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoInativo, cursoAtivo] = [cursoAtivo, cursoInativo]

console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor} = cachorro;

console.log(cor)