'use strict'
import { app } from './app'
import {setAttributes} from '../../scripts/helpers/setAttributes.js'

const footer = document.createElement('footer')
setAttributes(footer, {
  'class': 'footer',
  'id': 'footer'
})

export default () => {
  app.appendChild(footer)
}
