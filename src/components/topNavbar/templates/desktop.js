'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../navigation'

const Desktop = yo`
<ul className="navbar-top-desktop right hide-on-med-and-down">
  <li className="waves-effect waves-custom" id="li-${NavItems.id.home}"><a href=${NavItems.links.home} >${NavItems.items.home}</a></li>
  <li className="waves-effect waves-custom" id="li-${NavItems.id.id1}"><a href=${NavItems.links.link1} >${NavItems.items.item1}</a></li>
  <li className="waves-effect waves-custom" id="li-${NavItems.id.id2}"><a href=${NavItems.links.link2}>${NavItems.items.item2}</a></li>
  <li className="waves-effect waves-custom" id="li-${NavItems.id.id3}"><a href=${NavItems.links.link3}>${NavItems.items.item3}</a></li>
</ul>
`
const DesktopDropdown = yo`
<ul className="navbar-top-desktop right hide-on-med-and-down">
  <li className="active" id="link-home"><a className='dropdown-button waves-effect waves-blue' href='#' data-activates='dropdown'>${NavItems.items.home} <i className="material-icons">arrow_drop_down</i></a></li>
  <li className="waves-effect waves-custom" id="link-seccion"><a href=${NavItems.links.home} >${NavItems.items.home}</a></li>
  <li className="waves-effect waves-custom" id="li-${NavItems.id.id1}"><a href=${NavItems.links.link1} >${NavItems.items.item1}</a></li>
  <li className="waves-effect waves-custom" id="li-${NavItems.id.id2}"><a href=${NavItems.links.link2}>${NavItems.items.item2}</a></li>
  <li className="waves-effect waves-custom" id="li-${NavItems.id.id3}"><a href=${NavItems.links.link3}>${NavItems.items.item3}</a></li>
</ul>
`
export {Desktop, DesktopDropdown}
