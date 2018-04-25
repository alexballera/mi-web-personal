var showCategories = () => {
  var containerCategories = document.querySelector('#ul-categories')
  var template = ''
  var containerInner = document.createElement('div')

  function renderCategories (categories) {
    categories.categories.forEach((elem) => {
      if (elem.post_count) {
        template += `<a href="http://web.alexballera.com/${elem.slug}" target="_blank">
          <i class="fa fa-folder-open-o"></i> ${elem.name} (${elem.post_count}),
    </a>`
      }
    })
    containerInner.innerHTML = template
    containerCategories.appendChild(containerInner)
  }

  fetch('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/categories/?order_by=count&order=DESC')
  .then((response) => {
    return response.json()
  })
  .then((categories) => {
    localStorage.categories = JSON.stringify(categories)
    renderCategories(JSON.parse(localStorage.categories))
  })
}
module.exports = showCategories