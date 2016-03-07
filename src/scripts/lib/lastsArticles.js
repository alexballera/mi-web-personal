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
      .replace(':year:', project.date.split('-')[0])
      .replace(':month:', project.date.split('-')[1])
      .replace(':day1:', project.date.split('-')[2].split('')[0])
      .replace(':day2:', project.date.split('-')[2].split('')[1])

      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  // Request
  var template = `<li><a href=":url:" target="_blank"><i class="fa fa-file-text-o"></i> :title: - :day1::day2:/:month:/:year:</a></li>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/posts/?number=8')
      .then((lastArticles) => {
        $projectContainer.find('.loader').remove()
        localStorage.lastArticles = JSON.stringify(lastArticles)
        renderShows(JSON.parse(localStorage.lastArticles))
      })
})
module.exports = lastsArticles