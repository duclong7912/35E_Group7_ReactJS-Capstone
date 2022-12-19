import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/cyberlogo-white.png'
import avatar from '../../assets/img/avt.png'
import { eraseCookie, removeLocalStorage, TOKEN, USER } from '../../util/config'
const Header = () => {
  const { userLogin, profile } = useSelector(state => state.userReducer)
  const [profileClick, setProfileClick] = useState(false)
  const navigate = useNavigate();
  const logout = () => {
    navigate("/home")
    removeLocalStorage(USER);
    eraseCookie(TOKEN);
    window.location.reload();
  }

  return (
    <header>
      <div className="header__container">
        <div className="header__content">
          <NavLink to={"/home"} className="header__logo d-flex align-items-center">
            <img src={logo} alt="logo" />
            <span>cybersoft</span>
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
            {userLogin ? <div className="header__profile">
              <img src={profile?.avatar} alt="profile" onClick={() => {setProfileClick(!profileClick)}}/>
              {profileClick && <div className="header__profile-option">
                <ul>
                  <li>
                    <NavLink to={'/profile'} onClick={() => {setProfileClick(!profileClick)}}>
                      <i className="fa-solid fa-user"></i>
                      <span>Account information</span>
                    </NavLink>
                  </li>
                  <li onClick={logout}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Log out</span>
                  </li>
                </ul>
              </div>}
            </div> 
            : 
            <NavLink to={'/users/login'} className="header__login">
            <button className='btn-login button-login'>Login</button>
            </NavLink>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header