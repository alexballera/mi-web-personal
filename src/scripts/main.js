import $ from 'jquery'
import modernizr from './vendors/modernizr.js'
import selectivizr from './vendors/selectivizr.js'
import retinajs from './vendors/retina.js'
import hammer from './vendors/hammer.min.js'
import onSwipe from './lib/onSwipe'
import showMenu from './lib/showMenu'
import changeButton from './lib/changeButton'
import doTransparentBar from './lib/doTransparentBar'
import loadCSS from './lib/loadCSS'  // Descomentar si se está en línea
import loadJS from './lib/loadJS'  // Descomentar si se está en línea
import showProjects from './lib/showProjects'  // Descomentar si se está en línea
import showArticles from './lib/showArticles'  // Descomentar si se está en línea
// import mailChimp from './lib/mailChimp'  // Descomentar si se está en línea

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

// Load CSS
    var urlCSS = [
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css',
      'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css'
    ]
    loadCSS(urlCSS)

  // Load JS
    var urlJs = [
      '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5698df4c26bc43c8',
      '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    ]
    loadJS(urlJs)
  }
})()

