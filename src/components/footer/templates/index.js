'use strict'
import yo from 'yo-yo'
import {NavItems} from '../../navigation'

const elem = yo`
<div className="page-footer">
  <div className="footer-content">
    <div className="container">
      <div className="row valign-wrapper">
        <div className="col l4 s12">
          <picture className="footer-logo">
            <img src="images/logo.png" />
          </picture>
        </div>
        <div className="col l6 offset-l2 s12">
          <h2>Footer</h2>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col s12 l4">
          © 2017 Copyright Alex Ballera
        </div>
        <div className="col s12 l8 right-align">
          <a className="waves-effect waves-custom" href='#modal1' >${NavItems.items.legal}</a>
        </div>
      </div>
    </div>
  </div>
</div>
`
module.exports = elem
