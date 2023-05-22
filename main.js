function toggleTheme() {
  let body = document.body
  if (body.classList.contains('light')) {
    body.classList.remove('light')
    body.classList.add('dark')
  } else {
    body.classList.add('light')
    body.classList.remove('dark')
  }
  console.log('clicked')
}

let toggleButton = document.querySelector('.toggleButton')
toggleButton.addEventListener('click', toggleTheme)
