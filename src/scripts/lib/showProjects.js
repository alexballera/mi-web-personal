import $ from 'jquery'

var showProjects = $(() => {
  // Variables Globales
  var $projectContainer = $('#content_projects').find('.content__articles--container')
  // const mql = window.matchMedia('screen and (min-width: 680px')
  // if (mql.matches) {
  //     // Show Excerpt
  //   $projectContainer.on('mouseenter', 'section.content__articles--post', (ev) => {
  //     $('.content__articles--post--text').addClass('show').fadeIn('slow') // .css('display', 'table')
  //   })

  //     // Hide Excerpt
  //   $projectContainer.on('mouseleave', 'section.content__articles--post', (ev) => {
  //     $('.content__articles--post--text').removeClass('show') // .css('display', 'none')
  //   })
  // }

  // Optimizamos con renderShows
  function renderShows (projects) {
    $projectContainer.find('.loader').remove()
    projects.posts.forEach(function (project) {
      var projectTemplate = template
      .replace(':name:', project.title)
      .replace(':title:', project.title)
      .replace(':title article:', project.title)
      .replace(':url:', project.short_URL)
      .replace(':link:', project.short_URL)
      .replace(':link content:', project.short_URL)
      .replace(':image:', project.featured_image)
      .replace(':summary:', project.excerpt)
      .replace(':image alt:', project.title + ' Image')
      .replace(':author:', project.author.name)
      .replace(':avatar:', project.author.avatar_URL)
      .replace(':avatar alt:', project.author.name + ' Logo')
      .replace(':profile:', project.author.profile_URL)
      .replace(':profile img:', project.author.profile_URL)
      .replace(':summary:', project.excerpt)

      var $projectTemplate = $(projectTemplate)
      $projectTemplate.hide()
      $projectContainer.append($projectTemplate.fadeIn(3500))
    })
  }
  // Request
  var template = `<section class="content__articles--post" style="display: flex; align-items: center;">
        <div class="content__articles--post--title">
          <a href=":link:" target="_blank"><h3>:title:</h3></a>
          <picture class="content__articles--post--avatar"
          style="display:none;align-items:center;">
          <a href=":profile img:" target="_blank">
          <img src=":avatar:" alt=":avatar alt:"
            style="width:25px;height:25px;margin:8px;">
          </a><a href=":profile:" target="_blank" class="content__articles--post--link"><figcaption style="display:block;outline:none;font-size:80%;color:grey;">:author:</figcaption></a></picture>
        </div>
        <picture class="content__articles--post--picture"><a href=":url:" target="_blank" class="content__articles--post--link"><img src=":image:" alt=":image alt:"></a></picture>
        <article class="content__articles--post--text">
          <a href=":link content:" target="_blank">:summary:</a>
        </article>
        <section class="content__articles--post--author" style="display: flex;position:relative;">
        </section>
  </section>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/alexballera.com/posts/?number=3')
      .then((projects) => {
        $projectContainer.find('.loader').remove()
        localStorage.projects = JSON.stringify(projects)
        renderShows(JSON.parse(localStorage.projects))
      })
})
module.exports = showProjects