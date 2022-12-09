import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__body">
            <div className="footer__item">
              <h6>Get Help</h6>
              <ul>
                <li><a href="">Home</a></li>
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
                <li><a href="">Register</a></li>
                <li><a href="">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <span>© 2022 Cybersoft All Rights Reserved | Design Theme by <span>Trương Tấn Khải.</span></span>
      </div>
    </footer>
  )
}

export default Footer