var contentArticle = document.getElementById('contentArticle')

var hideText = () => {
  contentArticle.style.display = 'none'
  contentArticle.style.transition = 'all 3s ease'
  console.log(contentArticle)
}
module.exports = hideText
