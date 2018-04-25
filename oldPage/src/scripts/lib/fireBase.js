var fireBase = () => {
  var config = {
    apiKey: 'AIzaSyB-qpC1XuVjJ-EfizL9-tEQcU0jtb_yFcM',
    authDomain: 'webdev-ff9c7.firebaseapp.com',
    databaseURL: 'https://webdev-ff9c7.firebaseio.com',
    storageBucket: 'webdev-ff9c7.appspot.com'
  }
  firebase.initializeApp(config)
}
module.exports = fireBase
