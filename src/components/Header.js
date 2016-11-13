import React from 'react'
import logo from '../images/logo.png'

var Translate = require('react-i18nify').Translate;

const Header = () => (
  <div className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h2><Translate value="application.title"/></h2>
  </div>
)

export default Header
