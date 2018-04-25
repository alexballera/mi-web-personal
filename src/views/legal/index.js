'use strict'

import Modal from './jquery.options'
import elem from './template'

export default () => {
  const main = document.getElementById('main')
  main.appendChild(elem)
  Modal()
}
