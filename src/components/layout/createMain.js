'use strict'
import { app } from './app'
import {setAttributes} from '../../scripts/helpers/setAttributes.js'

export default () => {
  const main = document.createElement('main')
  setAttributes(main, {
    'class': 'main',
    'id': 'main'
  })
  app.appendChild(main)
}
