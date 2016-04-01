var showTag = () => {
  var responseHTML = document.querySelector('#tags')
  var template = ''
  var containerInner = document.createElement('div')

  function renderShows (data) {
    data.tags.forEach((elem) => {
      if (elem.post_count) {
        template += `<a href="http://web.alexballera.com/tag/${elem.slug} " target="_blank">
          <i class="fa fa-tag"></i>${elem.name} (${elem.post_count}),
          </a>`
      }
    })
    containerInner.innerHTML = template
    responseHTML.appendChild(containerInner)
  }

  fetch('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/tags/?order_by=count&order=DESC')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    localStorage.data = JSON.stringify(data)
    renderShows(JSON.parse(localStorage.data))
  })
}
module.exports = showTag