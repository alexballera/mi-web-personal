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
      .replace(':figcaption:', project.title)
      .replace(':url:', project.short_URL)
      .replace(':image:', project.featured_image)
      .replace(':image alt:', project.title + ' Image')
      .replace(':author:', project.author.name)
      .replace(':year:', project.date.split('-')[0])
      .replace(':month:', project.date.split('-')[1])
      .replace(':day1:', project.date.split('-')[2].split('')[0])
      .replace(':day2:', project.date.split('-')[2].split('')[1])
      .replace(':category:', project.categories.Proyectos.name)
      .replace(':tags:', Object.keys(project.tags))

      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  // Request
  var template = `<a class="content__articles--post" href=":url:" target="_blank">
    <section>
        <picture class="content__articles--post--picture">
            <img src=":image:" alt=":image alt:" width="300">
            <figcaption>:figcaption:</figcaption>
        </picture>
        <h3>:title:</h3>
        <i class="fa fa-user"> :author:</i> <i class="fa fa-calendar"> :day1::day2:/:month:/:year:</i> <i class="fa fa-folder-open"> :category:</i> <i class="fa fa-tags"> :tags: </i>
    </section>
  </a>`
  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/posts/?category=proyectos&number=6')
      .then((projects) => {
        $projectContainer.find('.loader').remove()
        localStorage.projects = JSON.stringify(projects)
        renderShows(JSON.parse(localStorage.projects))
      })
})
module.exports = showProjects