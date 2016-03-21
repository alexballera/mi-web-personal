import $ from 'jquery'

var showTags = $(() => {
  // Variables Globales
  var $projectContainer = $('#showCategories').find('.tags')

  // Optimizamos con renderShows
  function renderShows (tags) {
    $projectContainer.find('.loader').remove()
    tags.tags.forEach(function (project) {
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
  var template = `<a href="http://web.alexballera.com/tag/:url:" target="_blank"><i class="fa fa-tag"></i> :title: (:count:),
  </a>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/tags/?order_by=count&order=DESC')
      .then((tags) => {
        $projectContainer.find('.loader').remove()
        localStorage.tags = JSON.stringify(tags)
        renderShows(JSON.parse(localStorage.tags))
      })
})
module.exports = showTags