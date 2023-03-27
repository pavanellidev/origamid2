export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  if(sections.length) {
  const windowValue = window.innerHeight * 0.6

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowValue
      if(sectionTop < 0) {
        section.classList.add('ativo')
      }
    })
  }

  animaScroll()

  window.addEventListener('scroll', animaScroll)
  }
}
