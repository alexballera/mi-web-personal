import $ from 'jquery'

var showProjects = $(() => {
  // Variables Globales
  var $projectContainer = $('#content_projects').find('.content__articles--container')

  // Optimizamos con renderShows
  function renderShows (projects) {
    $projectContainer.find('.loader').remove()
    projects.posts.forEach(function (project) {
      var projectTemplate = template
      .replace(':title:', project.title)
      .replace(':url:', project.short_URL)
      .replace(':image:', project.featured_image)
      .replace(':image alt:', project.title + ' Image')
      .replace(':category:', project.categories.Proyectos.name)

      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  // Request
  var template = `<section class="content__articles--post">
      <a class="content__articles--post--link" href=":url:" target="_blank">
        <picture class="content__articles--post--picture">
            <img src=":image:" alt=":image alt:">
            <figcaption><h3>:title:</h3></figcaption>
        </picture>
        <i class="fa fa-folder-open" style="font-size:90%;color:grey;margin:0.5rem"> :category:</i>
      </a>
  </section>`
  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/alexballera.com/posts/?category=proyectos&number=6')
      .then((projects) => {
        $projectContainer.find('.loader').remove()
        localStorage.projects = JSON.stringify(projects)
        renderShows(JSON.parse(localStorage.projects))
      })
})
module.exports = showProjects