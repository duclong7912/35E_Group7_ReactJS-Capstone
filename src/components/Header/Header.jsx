import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="header__content">
          <NavLink to={"/home"} className="header__logo">
            <img src="./img/image 3.png" alt="logo" />
          </NavLink>
          <div className="header__right">
            <NavLink to={'/search'} className="header__search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </NavLink>
            <NavLink to={"/carts"} className="header__cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>0</span>
            </NavLink>
            <NavLink to={'/login'} className="header__login">
              <button className='btn-login button-login'>Login</button>
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header