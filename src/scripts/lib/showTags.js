var showTags = () => {
  var containerTags = document.querySelector('#tags')
  var template = ''
  var containerInner = document.createElement('div')

  function renderTags (tags) {
    tags.tags.forEach((elem) => {
      if (elem.post_count) {
        template += `<a href="http://web.alexballera.com/tag/${elem.slug} " target="_blank">
          <i class="fa fa-tag"></i>${elem.name} (${elem.post_count}),
          </a>`
      }
    })
    containerInner.innerHTML = template
    containerTags.appendChild(containerInner)
  }

  fetch('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/tags/?order_by=count&order=DESC')
  .then((response) => {
    return response.json()
  })
  .then((tags) => {
    localStorage.tags = JSON.stringify(tags)
    renderTags(JSON.parse(localStorage.tags))
  })
}
module.exports = showTags