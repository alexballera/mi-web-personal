import $ from 'jquery'
import modernizr from './vendors/modernizr.js'
import selectivizr from './vendors/selectivizr.js'
import validate from './vendors/mc-validate.js'
import retinajs from './vendors/retina.js'
import showMenu from './lib/showMenu'
import changeButton from './lib/changeButton'
import doTransparentBar from './lib/doTransparentBar'
import cookieConsent from './lib/cookieConsent'  // Descomentar si se está en línea
import loadJS from './lib/loadJS'  // Descomentar si se está en línea
import loadLeadin from './lib/loadLeadin'  // Descomentar si se está en línea
import showProjects from './lib/showProjects'  // Descomentar si se está en línea
import showArticles from './lib/showArticles'  // Descomentar si se está en línea
import lastsArticles from './lib/lastsArticles'  // Descomentar si se está en línea
import showCategories from './lib/showCategories'  // Descomentar si se está en línea
import showTags from './lib/showTags'  // Descomentar si se está en línea

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

    cookieConsent()
  // Load JS
    var urlJs = [
      '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56db8556594705cc',
      '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js',
      '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js'
    ]
    loadJS(urlJs)

  // Load LeadIn
    var leadIn = ['//js.leadin.com/js/v1/2056572.js']
    loadLeadin(leadIn)
  }
})()

