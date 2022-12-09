import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__content">
          <ul className='nav__list'>
            <li className='active'><a href="">Home</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Women</a></li>
            <li><a href="">Kid</a></li>
            <li><a href="">Sport</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar