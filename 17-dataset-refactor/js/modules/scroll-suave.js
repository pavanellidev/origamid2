export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')

  linksInternos.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute('href')
      const section = document.querySelector(href)
      const topo = section.offsetTop

      window.scrollTo({
        top: topo,
        behavior: "smooth"
      })
    })
  })
}
