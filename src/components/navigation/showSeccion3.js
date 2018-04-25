'use strict'
import {$app} from '../layout/app'

const showView1 = () => {
  const liID1 = '#li-view-1'
  const liID2 = '#li-view-2'
  const liID3 = '#li-view-3'

  $app.find(liID3).click(() => {
    $app.find(liID1).removeClass('activado')
    $app.find(liID2).removeClass('activado')
    $app.find(liID3).addClass('activado')
  })
}

export default showView1
