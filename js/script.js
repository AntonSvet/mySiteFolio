window.addEventListener('DOMContentLoaded', () => {
  // Modal
  const modal = document.querySelector('.modal'),
    btnSend = document.querySelector('.btn_send'),
    btnClose = document.querySelector('.modal__close'),
    scroll = calcScroll(),
    scrollUp = document.querySelector('.scroll-up'),
    form = document.querySelector('form'),
    input = document.querySelectorAll('input')

  function openModal() {
    modal.classList.add('open')
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scroll}px`
  }
  function closeModal() {
    modal.classList.remove('open')
    document.body.style.overflow = ''
    document.body.style.paddingRight = `0px`
    scrollUp.classList.add('scroll-up--active')
  }
  btnSend.addEventListener('mouseenter', () => {
    scrollUp.classList.remove('scroll-up--active')
  })

  btnSend.addEventListener('click', openModal)
  btnClose.addEventListener('click', closeModal)

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      closeModal()
    }
  })
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  function calcScroll() {
    /* let div = document.createElement('div')
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'

    document.body.appendChild(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove() */
    //вся ширина окна -  ширина минус прокрутка
    let scrollWidth = window.innerWidth - document.documentElement.clientWidth

    return scrollWidth
  }

  // form
  /* 
  const message = {
    loading: 'Loading...',
    success: 'Thank you for your message',
    failure: 'Error for form...',
  }

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading
    let res = await fetch(url, {
      method: 'POST',
      body: data,
    })
    return await res.text()
  }
  const clearInputs = () => {}
  input.forEach((item) => {
    item.value = ''
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let statusMessage = document.createElement('div')
    statusMessage.classList.add('status')
    form.appendChild(statusMessage)
    const formData = new FormData(form)
    postData('server.php', formData)
      .then((res) => {
        console.log(res)
        statusMessage.textContent = message.success
      })
      .catch(() => (statusMessage.textContent = message.failure))
      .finally(() => {
        clearInputs()
        setTimeout(() => {
          statusMessage.remove()
        }, 3000)
      })
  }) */
  //burger-menu

  const burger = document.querySelector('.header-burger'),
    nav = document.querySelector('.nav-panel')
  burger.addEventListener('click', (e) => {
    e.preventDefault()
    burger.classList.toggle('active')
    nav.classList.toggle('active')
  })
})

//translate

const btns = document.querySelectorAll('.eng'),
  en = document.querySelectorAll('.en'),
  ru = document.querySelectorAll('.ru'),
  btnR = document.querySelector('.r'),
  btnE = document.querySelector('.e')

ru.forEach((item) => (item.style.display = 'none'))

btnR.addEventListener('click', () => {
  en.forEach((item) => (item.style.display = 'none'))
  ru.forEach((item) => (item.style.display = 'block'))
})
btnE.addEventListener('click', () => {
  ru.forEach((item) => (item.style.display = 'none'))
  en.forEach((item) => (item.style.display = 'block'))
})

function hide() {
  btns.forEach((btn) => {
    btn.classList.remove('active')
  })
}
function show(i = 1) {
  btns[i].classList.add('active')
}

hide()
show()

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    hide()
    show(i)
  })
})
