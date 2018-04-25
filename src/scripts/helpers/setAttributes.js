'use strict'

var setAttributes = (el, attrs) => {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}

export {setAttributes}
