'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../components/navigation'
import title from './sections/title'
import section1 from './sections/section1'
import section2 from './sections/section2'
import section3 from './sections/section3'

const elem = yo`
<section id="seccion-${NavItems.id.home}" className="container">
  <div className="section">

    ${title}

    ${section1}
  
    ${section2}

    ${section3}
  </div>
</section>
`
export default elem
