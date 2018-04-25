'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'

const showLegal = () => {
  hideViews()
  const SectionID = '#seccion-' + `${NavItems.id.legal}`

  $app.find(SectionID).show('fade', 1000)
  document.title = `${NavItems.title.legal}`
}

export default showLegal
