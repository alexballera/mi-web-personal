import $ from 'jquery'

var showArticles = $(() => {
  // Variables Globales
  var $projectContainer = $('#content_articles').find('.content__articles--container')

  // Optimizamos con renderShows
  function renderShows (articles) {
    $projectContainer.find('.loader').remove()
    articles.posts.forEach(function (project) {
      var projectTemplate = template
      .replace(':title:', project.title)
      .replace(':url:', project.short_URL)
      .replace(':image:', project.featured_image)
      .replace(':image alt:', project.title + ' Image')
      .replace(':category1:', Object.keys(project.categories)[0])
      .replace(':category2:', Object.keys(project.categories)[1])
      .replace(':tag1:', Object.keys(project.tags)[0])
      .replace(':tag2:', Object.keys(project.tags)[1])
      .replace(':tag3:', Object.keys(project.tags)[2])

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
        <i class="fa fa-folder-open"> :category1:, :category2:</i> <i class="fa fa-tags"> :tag1:, :tag2:, :tag3:</i>
      </a>
  </section>`

  $.ajax('https://public-api.wordpress.com/rest/v1.1/sites/blog.alexballera.com/posts/?number=6&category=sin-categoria,responsive,html,css,wordpress,rails,servidor,git,javascript')
      .then((articles) => {
        $projectContainer.find('.loader').remove()
        localStorage.articles = JSON.stringify(articles)
        renderShows(JSON.parse(localStorage.articles))
      })
})
module.exports = showArticles