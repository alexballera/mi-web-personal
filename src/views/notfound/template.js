'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'

const elem = yo`
<section id="seccion-${NavItems.id.nf}">
  <div id="${NavItems.id.nf}" className="${NavItems.id.nf}">
    <h1>No encontrado</h1>
  </div>
</section>
`
module.exports = elem
