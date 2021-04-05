window.addEventListener('DOMContentLoaded', () => {
  const scrollItems = document.querySelectorAll('.scroll-item')
  const scrollAnimation = () => {
    let windowCenter = window.innerHeight / 2 + window.scrollY + 180
    scrollItems.forEach((el) => {
      // css: position: relative/ absolute
      //let scrollOffset = el.getBoundingClientRect().top + window.scrollY
      let scrollOffset = el.offsetTop + el.offsetHeight / 2
      if (windowCenter >= scrollOffset) {
        el.classList.add('animation-class')
      } else {
        el.classList.remove('animation-class')
      }
    })
  }
  scrollAnimation()
  window.addEventListener('scroll', () => {
    scrollAnimation()
  })
})
