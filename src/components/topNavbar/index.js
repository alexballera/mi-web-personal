'use strict'
import yo from 'yo-yo'
import {Desktop} from './templates/desktop'
import sideNav from './templates/sideNav'
import JqueryOptions from './templates/jquery.options'
import {NavItems} from '../navigation'

const elem = yo`
<div>
  <div className="navbar-fixed">
    <nav className="navbar-top">
      <div className="nav-wrapper">
        <a href=${NavItems.links.home} className="brand-logo" id="brand-logo">
          <img src="images/logo.png" alt="" className="header__image">
        </a>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        ${Desktop}
      </div>
    </nav>
  </div>
  ${sideNav}
</div>
`
export default () => {
  document.getElementById('navbar-top').appendChild(elem)
  JqueryOptions()
}
