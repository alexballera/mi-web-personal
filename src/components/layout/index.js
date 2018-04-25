'use strict'
import createNavbar from './createNavbar'
import createMain from './createMain'
import createFooter from './createFooter'
import {head} from './addHeadMeta'
import addBodyBrowserHappy from './addBodyBrowserHappy'

export default () => {
  head()
  addBodyBrowserHappy()
  createNavbar()
  createMain()
  createFooter()
}
