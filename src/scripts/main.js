import $ from 'jquery'
import modernizr from './vendors/modernizr.js'
import selectivizr from './vendors/selectivizr.js'
import validate from './vendors/mc-validate.js'
import retinajs from './vendors/retina.js'
// import prism from './vendors/prism.js'
import showMenu from './lib/showMenu'
import changeButton from './lib/changeButton'
import doTransparentBar from './lib/doTransparentBar'
import cookieConsent from './lib/cookieConsent'
import loadJS from './lib/loadJS'
import loadLeadin from './lib/loadLeadin'
import showArticles from './lib/showArticles'
import showCategories from './lib/showCategories'
import showTags from './lib/showTags'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
// Variables Globales
    var btnMenu = document.getElementById('btnMenu')
    var btnButton = document.getElementById('btnButton')
    var navBar = document.getElementById('navBar')

// Menú
    btnMenu.addEventListener('click', showMenu)
    navbarMenu.addEventListener('click', showMenu)
    btnButton.addEventListener('click', showMenu)
    btnButton.addEventListener('click', changeButton)

// Cookies
    cookieConsent()

  // Load JS
    var urlJs = [
      '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56db8556594705cc',
      '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js'
      // 'http://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    ]
    loadJS(urlJs)

  // Load LeadIn
    var leadIn = ['//js.leadin.com/js/v1/2056572.js']
    loadLeadin(leadIn)
  }
})()

