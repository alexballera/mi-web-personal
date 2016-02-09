import $ from 'jquery'

var showCategories = $(() => {
  // Variables Globales
  var $projectContainer = $('#showCategories').find('.ul-categories')

  // Optimizamos con renderShows
  function renderShows (categories) {
    $projectContainer.find('.loader').remove()
    categories.categories.forEach(function (project) {
      var projectTemplate = template
      .replace(':title:', project.name)
      .replace(':url:', project.slug)

      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  // Request
  var template = `<li><a href="/category/:url:" target="_blank">✔ :title:</a></li>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/alexballera.com/categories/?number=5&order_by=count&order=DESC')
      .then((categories) => {
        $projectContainer.find('.loader').remove()
        localStorage.categories = JSON.stringify(categories)
        renderShows(JSON.parse(localStorage.categories))
      })
})
module.exports = showCategories