import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <h4>logo</h4>
      </div>
      <div className="header__search">
        <div className="header__searchContainer">
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header__menuItems">
        <a href="#">Free stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  )
}

export default Header
