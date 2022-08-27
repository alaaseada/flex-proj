const nav = document.getElementsByTagName('nav')[0]

const toggleMenu = (e) => {
  let current_style = nav.style.display
  nav.style.display = current_style === 'flex' ? 'none' : 'flex'
}

document.addEventListener('click', toggleMenu)
