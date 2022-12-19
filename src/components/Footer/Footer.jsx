import React from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'

const Footer = () => {

  const { userLogin } = useSelector(state => state.userReducer)

  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__body">
            <div className="footer__item">
              <h6>Get Help</h6>
              <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><a href="">Nike</a></li>
                <li><a href="">Adidas</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
            <div className="footer__item">
              <h6>Support</h6>
              <ul>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Help</a></li>
                <li><a href="">Phone</a></li>
              </ul>
            </div>
            <div className="footer__item">
              <h6>Register</h6>
              <ul>
                <li><NavLink to={userLogin ? '/home' : '/users/register'}>Register</NavLink></li>
                <li><NavLink to={userLogin ? '/home' : '/users'}>Login</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <span>© 2022 Cybersoft All Rights Reserved | Design Theme by <a href='https://www.facebook.com/kido.kaitou'>Trương Tấn Khải.</a></span>
      </div>
    </footer>
  )
}

export default Footer