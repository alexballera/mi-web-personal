var loadJS = (url) => {
  for (var i in url) {
    var elem = document.createElement('script')
    elem.src = url[i]
    elem.async = 'async'
    elem.defer = 'defer'
    elem.type = 'text/javascript'
    document.body.appendChild(elem)
  }
}
module.exports = loadJS
