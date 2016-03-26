var loadLeadin = (url) => {
  for (var i in url) {
    var elem = document.createElement('script')
    elem.src = url[i]
    elem.async = 'async'
    elem.defer = 'defer'
    elem.crossorigin = 'use-credentials'
    elem.id = 'LeadinEmbed-2056572'
    elem.type = 'text/javascript'
    document.body.appendChild(elem)
  }
}
module.exports = loadLeadin
