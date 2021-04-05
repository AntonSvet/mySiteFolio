window.addEventListener('DOMContentLoaded', () => {
  const offset = 78,
    scrollUp = document.querySelector('.scroll-up'),
    scrollUpSvgPath = document.querySelector('.scroll-up__svg-path'),
    pathLength = scrollUpSvgPath.getTotalLength(),
    headerHide = document.querySelector('.header'),
    links = document.querySelectorAll('a[href^="#"]'),
    section = document.querySelectorAll('.sec')

  scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`
  scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms'

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop

  // updateDashoffset

  const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight
    const dashoffset = pathLength - (getTop() * pathLength) / height
    scrollUpSvgPath.style.strokeDashoffset = dashoffset
  }

  // onScroll

  window.addEventListener('scroll', () => {
    updateDashoffset()
    if (getTop() > offset) {
      scrollUp.classList.add('scroll-up--active')
      headerHide.classList.add('header-hide')
      headerHide.style.background = 'transparent'
    } else {
      scrollUp.classList.remove('scroll-up--active')
      headerHide.classList.remove('header-hide')
      headerHide.style.background = ''
    }
  })
  //click

  scrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
  //////////////////////////////////////////////////////////////
  // active class of menu items onscroll
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY

    if (window.innerWidth > 768) {
      section.forEach((item, i) => {
        if (item.offsetTop - headerHide.clientHeight <= scrollDistance) {
          links.forEach((link) => {
            if (link.classList.contains('active')) {
              link.classList.remove('active')
            }
          })
          document
            .querySelectorAll('.header li')
            [i].querySelector('a')
            .classList.add('active')
          headerHide.classList.remove('header-hide')
        }
      })
    }
  })

  headerHide.addEventListener('mouseenter', () => {
    headerHide.classList.remove('header-hide')
  })
  headerHide.addEventListener('mouseleave', () => {
    if (getTop() > offset) {
      headerHide.classList.add('header-hide')
    }
  })
  window.addEventListener('click', () => {
    if (getTop() > 88) {
      headerHide.classList.add('header-hide')
    }
  })
  //scroll site for click

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      links.forEach((link, i) => {
        if (e.target == link) {
          hide()
          show(i)
        }
      })

      const id = link.getAttribute('href')
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  })

  function show(i = 0) {
    links[i].classList.add('active')
  }
  function hide() {
    links.forEach((link) => {
      link.classList.remove('active')
    })
  }
})
