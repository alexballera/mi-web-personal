var loadJS = (url) => {
  for (var i = 0; i < url.length; i++) {
    var elem = document.createElement('script')
    elem.async = 'async'
    elem.src = url[i]
    document.body.appendChild(elem)
  }
}
module.exports = loadJS
