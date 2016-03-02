import $ from 'jquery'

var lastsArticles = $(() => {
  // Variables Globales
  var $projectContainer = $('#lastArticles').find('.ul-articles')

  // Optimizamos con renderShows
  function renderShows (lastArticles) {
    $projectContainer.find('.loader').remove()
    lastArticles.posts.forEach(function (project) {
      var projectTemplate = template
      .replace(':title:', project.title)
      .replace(':url:', project.short_URL)

      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  // Request
  var template = `<li><a href=":url:" target="_blank"><i class="fa fa-file-text-o"> :title:</i></a></li>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/blog.alexballera.com/posts/?number=8')
      .then((lastArticles) => {
        $projectContainer.find('.loader').remove()
        localStorage.lastArticles = JSON.stringify(lastArticles)
        renderShows(JSON.parse(localStorage.lastArticles))
      })
})
module.exports = lastsArticles