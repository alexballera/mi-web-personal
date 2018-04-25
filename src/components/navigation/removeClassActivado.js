'use strict'
import {$app} from '../layout/app'

const removeClass = () => {
  $app.find('#li-view-1').removeClass('activado')
  $app.find('#li-view-2').removeClass('activado')
  $app.find('#li-view-3').removeClass('activado')
}
export default removeClass
