import $ from 'jquery'

var showArticles = $(() => {
  // Variables Globales
  var $projectContainer = $('#content_projects').find('.content__articles--container')
  var $articleContainer = $('#content_articles').find('.content__articles--container')
  var $lastsArticlesContainer = $('#lastArticles').find('.ul-articles')

  /** Show Projects **/
  function renderProjects (projects) {
    $projectContainer.find('.loader').remove()
    projects.posts.forEach(function (project) {
      if (project.categories.Proyectos) {
        var projectTemplate = templateArticles
        .replace(':title:', project.title)
        .replace(':url title:', project.title)
        .replace(':url:', project.short_URL)
        .replace(':image:', project.post_thumbnail.URL)
        .replace(':image alt:', project.title)
        .replace(':author:', project.author.name)
        .replace(':year:', project.date.split('-')[0])
        .replace(':month:', project.date.split('-')[1])
        .replace(':day1:', project.date.split('-')[2].split('')[0])
        .replace(':day2:', project.date.split('-')[2].split('')[1])
        .replace(':category:', Object.keys(project.categories))
        .replace(':tags:', Object.keys(project.tags))
      }
      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  /** Show Articles **/
  function renderArticles (projects) {
    $articleContainer.find('.loader').remove()
    projects.posts.forEach(function (project) {
      if (!project.categories.Proyectos) {
        var projectTemplate = templateArticles
        .replace(':title:', project.title)
        .replace(':url title:', project.title)
        .replace(':url:', project.short_URL)
        .replace(':image:', project.post_thumbnail.URL)
        .replace(':image alt:', project.title)
        .replace(':author:', project.author.name)
        .replace(':year:', project.date.split('-')[0])
        .replace(':month:', project.date.split('-')[1])
        .replace(':day1:', project.date.split('-')[2].split('')[0])
        .replace(':day2:', project.date.split('-')[2].split('')[1])
        .replace(':category:', Object.keys(project.categories))
        .replace(':tags:', Object.keys(project.tags))
      }
      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $articleContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  /** Show Lasts Articles **/
  function renderLastsArticles (projects) {
    $lastsArticlesContainer.find('.loader').remove()
    for (var i = 0; i < 6; i++) {
      var projectTemplate = templateLastsArticles
      .replace(':title:', projects.posts[i].title)
      .replace(':url:', projects.posts[i].short_URL)
      .replace(':year:', projects.posts[i].date.split('-')[0])
      .replace(':month:', projects.posts[i].date.split('-')[1])
      .replace(':day1:', projects.posts[i].date.split('-')[2].split('')[0])
      .replace(':day2:', projects.posts[i].date.split('-')[2].split('')[1])

      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $lastsArticlesContainer.append($projectTemplate.fadeIn(3500))
    }
  }
  /** Templates **/
  var templateArticles = `<a class="content__articles--post" href=":url:" target="_blank" title=":url title:">
    <section>
        <picture class="content__articles--post--picture">
            <img src=":image:" alt=":image alt:" width="300">
        </picture>
        <h3>:title:</h3>
        <i class="fa fa-user"> :author:</i>
        <i class="fa fa-calendar"> :day1::day2:/:month:/:year:</i>
        <i class="fa fa-folder-open-o"> :category:</i>
        <i class="fa fa-tags"> :tags: </i>
    </section>
  </a>`
  var templateLastsArticles = `<li>
    <a href=":url:" target="_blank">
      <i class="fa fa-file-text-o"></i> :title: - :day1::day2:/:month:/:year:
    </a>
  </li>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/web.alexballera.com/posts')
      .then((projects) => {
        $projectContainer.find('.loader').remove()
        localStorage.projects = JSON.stringify(projects)
        renderProjects(JSON.parse(localStorage.projects))
        renderArticles(JSON.parse(localStorage.projects))
        renderLastsArticles(JSON.parse(localStorage.projects))
      })
})
module.exports = showArticles