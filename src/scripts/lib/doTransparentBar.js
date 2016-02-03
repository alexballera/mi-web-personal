window.onscroll = () => {
  doTransparentBar()
}

function doTransparentBar () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('header').style.backgroundColor = 'rgba(30,30,30,0.5)'
  } else {
    document.getElementById('header').style.backgroundColor = '#1E1E1E'
  }
}
module.exports = doTransparentBar
