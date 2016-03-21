import $ from 'jquery'

var showCategories = $(() => {
  // Variables Globales
  var $projectContainer = $('#showCategories').find('.ul-categories')

  // Optimizamos con renderShows
  function renderShows (categories) {
    $projectContainer.find('.loader').remove()
    categories.categories.forEach(function (project) {
      if (project.post_count) {
        var projectTemplate = template
        .replace(':title:', project.name)
        .replace(':url:', project.slug)
        .replace(':count:', project.post_count)
      }
      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  // Request
  var template = `<a href="http://web.alexballera.com/:url:" target="_blank"><i class="fa fa-folder-open-o"></i> :title: (:count:),
  </a>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/categories/?order_by=count&order=DESC')
      .then((categories) => {
        $projectContainer.find('.loader').remove()
        localStorage.categories = JSON.stringify(categories)
        renderShows(JSON.parse(localStorage.categories))
      })
})
module.exports = showCategories