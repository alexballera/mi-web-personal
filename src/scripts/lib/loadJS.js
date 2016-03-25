var loadJS = (url) => {
  for (var i in url) {
    var elem = document.createElement('script')
    elem.async = 'async'
    elem.src = url[i]
    document.body.appendChild(elem)
  }
}
module.exports = loadJS
