import React from 'react'
import logo from '../images/logo/logo.svg';

function Header() {
  return (
    <header className="header page__section">
      <img className="logo" src={logo} alt="Логотип"/>
    </header>
  )
}

export default Header;

