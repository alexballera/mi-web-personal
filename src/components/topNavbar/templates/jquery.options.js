'use strict'

export default () => {
  // Dropdown
  $('.dropdown-button').dropdown(
    {
      hover: true,
      belowOrigin: true,
      constrainWidth: false
    }
  )
  // SideNav
  $('.button-collapse').sideNav()
}
