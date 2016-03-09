var cookieConsent = () => {
  var elem = document.createElement('script')
  elem.text = 'window.cookieconsent_options = {"message":"Este sitio web utiliza cookies para asegurarse de que obtenga la mejor experiencia en nuestro sitio web","dismiss":"Aceptar","learnMore":"Más información","link":"http://alexballera.com/cookies.html","theme":"dark-bottom"};'
  document.body.appendChild(elem)
}
module.exports = cookieConsent
