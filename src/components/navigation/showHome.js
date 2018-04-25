'use strict'
import hideViews from './hideViews'
import removeClassActivado from './removeClassActivado'
import {$app} from '../layout/app'
import {data} from '../layout/addHeadMeta'

const showHome = () => {
  const brandLogo = '#brand-logo'
  const liHome = '#li-home'

  hideViews()

  $app.find('#seccion-home').show('fade', 1000)
  document.title = `${data.title}`

  $app.find(liHome).click(() => {
    removeClassActivado()
  })

  $app.find(brandLogo).click(() => {
    removeClassActivado()
  })
}
export default showHome
