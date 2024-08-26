const app = document.querySelector('#app')
const search = document.querySelector('.search')


search.addEventListener('click', () => {
  app.classList.toggle('active')
})