'use strict'
import {$app} from '../layout/app'
import hideViews from './hideViews'
import {NavItems} from '../navigation'

const notFound = () => {
  hideViews()
  const SectionID = '#seccion-' + `${NavItems.id.nf}`

  $app.find(SectionID).show('fade', 1000)
  document.title = `${NavItems.title.nf}`
}

export default notFound
