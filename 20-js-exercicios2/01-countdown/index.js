import Countdown from "./countdown.js";

const diasParaONatal = new Countdown('25 December 2023 00:00:00')

const diasParaOAnoNovo = new Countdown('01 January 2024 00:00:00')

console.log(diasParaONatal.seconds)

setInterval(() => {
  const natalP = document.querySelector('#natal').textContent = `Faltam ${diasParaONatal.total.days} dias, ${diasParaONatal.total.hours} horas, ${diasParaONatal.total.minutes} minutos, ${diasParaONatal.total.seconds} segundos para o Natal`

  const anoNovoP = document.querySelector('#ano-novo').textContent = `Faltam ${diasParaOAnoNovo.total.days} dias, ${diasParaOAnoNovo.total.hours} horas, ${diasParaOAnoNovo.total.minutes} minutos, ${diasParaOAnoNovo.total.seconds} segundos para o Ano Novo`
}, 1000)