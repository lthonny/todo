function scrollTexterea() {
  const texterea = document.querySelector('.texterea')

  const form = document.querySelector('.task-text')

  const inputEdit = document.querySelector('.inputEdit')

  function auto_grow(element) {
    element.style.height = '5px'
    element.style.height = (element.scrollHeight) + 'px'
  }

  texterea.addEventListener('keydown', function (event) {
    auto_grow(texterea)
  })
}