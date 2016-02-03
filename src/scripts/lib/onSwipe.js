var navbarMenu = document.getElementById('navbarMenu')

var onSwipe = () => {
  var hammerSide = new Hammer(navbarMenu)
  console.log(hammerSide)

  hammerSide.on('swiperight', onSwipe)
  hammerSide.on('swiperleft', onSwipe)

  function onSwipe () {
    navbarMenu.classList.toggle('nav__menu--list--show')
    navbarMenu.classList.toggle('nav__menu--list')
  }
}
module.exports = onSwipe
