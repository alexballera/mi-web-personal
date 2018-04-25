'use strict'
import WebFont from './Webfont'
import Layout from '../components/layout'
import topNavbar from '../components/topNavbar'
import Views from '../views'
import Footer from '../components/footer'
import {Navigation} from '../components/navigation'
global.jQuery = require('jquery')
require('jquery-ui-dist/jquery-ui')

function main () {
  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    WebFont()
    Layout()
    topNavbar()
    Views()
    Footer()
    Navigation()
  }
}
main()
