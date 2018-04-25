var changeButton = () => {
  navbarMenu.classList.toggle('nav__menu--list--show')
  navbarMenu.classList.toggle('nav__menu--list')
  btnMenu.classList.toggle('inactive')
  btnButton.classList.toggle('fa-bars')
  btnButton.classList.toggle('fa-times')
}
module.exports = changeButton
