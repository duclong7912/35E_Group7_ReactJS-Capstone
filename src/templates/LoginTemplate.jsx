import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import shoe from './../assets/img/shoe.png'
import logo from './../assets/img/cyberlogo-white.png'

const LoginTemplate = () => {
  return (
    <div className="template__login">
        <div className="template__login-container">
            <div className="template__login-content">
                <div className="template__card">
                    <img src={shoe} alt="shoes" />
                    <NavLink to='/home' className="logo">
                      <img src={logo} alt="logo" />
                      <span>CYBERSOFT</span>
                    </NavLink>
                    <div className="overlay"></div>
                </div>
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default LoginTemplate