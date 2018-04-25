'use strict'

import hideViews from './hideViews'
import initHome from './initHome'
import showHome from './showHome'
import showSeccion1 from './showSeccion1'
import showSeccion2 from './showSeccion2'
import showSeccion3 from './showSeccion3'
import showNotFound from './showNotFound'
import page from 'page'

const baseUri = '/'

const id = 'view'

const NavItems = {
  items: {
    home: 'Home',
    item1: 'Seccion 1',
    item2: 'Seccion 2',
    item3: 'Seccion 3',
    legal: 'Legal',
    nf: 'No Encontrado'
  },
  title: {
    home: 'Home',
    view1: 'Seccion 1',
    view2: 'Seccion 2',
    view3: 'Seccion 3',
    legal: 'Legal',
    nf: 'No Encontrado'
  },
  id: {
    home: 'home',
    id1: id + '-1',
    id2: id + '-2',
    id3: id + '-3',
    legal: id + '-legal',
    nf: 'not-found'
  },
  links: {
    home: baseUri,
    link1: baseUri + `#home-section-1`,
    link2: baseUri + `#home-section-2`,
    link3: baseUri + `#home-section-3`,
    legal: baseUri + 'legal',
    nf: '*'
  }
}

const Navigation = () => {
  hideViews()
  initHome()
  showSeccion1()
  showSeccion2()
  showSeccion3()
  page(NavItems.links.home, showHome)
  page(NavItems.links.nf, showNotFound)
  page()
}

export {Navigation, NavItems}
