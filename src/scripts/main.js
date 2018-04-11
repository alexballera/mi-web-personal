import './vendors/modernizr.js'
import './vendors/selectivizr.js'
import './vendors/mc-validate.js'
import './vendors/retina.js'
import './vendors/spinner.js'
import './lib/doTransparentBar'
import showMenu from './lib/showMenu'
import changeButton from './lib/changeButton'
import cookieConsent from './lib/cookieConsent'
import loadJS from './lib/loadJS'
// import loadLeadin from './lib/loadLeadin'
import showArticles from './lib/showArticles'
import showCategories from './lib/showCategories'
import showTags from './lib/showTags'
import Home from './views/home'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    var navbarMenu = document.getElementById('navbarMenu')
    var btnMenu = document.getElementById('btnMenu')
    var btnButton = document.getElementById('btnButton')

    // Menú
    btnMenu.addEventListener('click', showMenu)
    navbarMenu.addEventListener('click', showMenu)
    btnButton.addEventListener('click', showMenu)
    btnButton.addEventListener('click', changeButton)

    Home()

    // Cookies
    cookieConsent()

    // Articles
    showArticles()

    // Tags
    showTags()

    // Categories
    showCategories()

    // fireBase
    // fireBase()

    // Load JS
    var urlJs = [
      '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56db8556594705cc',
      '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js'
    ]
    loadJS(urlJs)

    // Load LeadIn
    /* var leadIn = ['//js.leadin.com/js/v1/2056572.js']
    loadLeadin(leadIn) */
  }
})()
