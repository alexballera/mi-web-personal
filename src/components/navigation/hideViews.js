'use strict'
import {$app} from '../layout/app'
import {NavItems} from '../navigation'

export default () => {
  $app.find('#seccion-home').hide()
  $app.find('#seccion-' + `${NavItems.id.nf}`).hide()
}
