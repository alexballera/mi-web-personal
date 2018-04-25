'use strict'
/**
 * https://github.com/typekit/webfontloader
 */
import WebFont from 'webfontloader'

export default () => {
  WebFont.load({
    google: {
      families: ['Material Icons']
    }
  })
}
