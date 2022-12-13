import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register text-center">
      <div className="title">
        <h1>Register</h1>
      </div>
      <div className="register__wrapper">
        <form className="form__register">
          <div className="form__input">
            <input type="email" required/>
            <span>Email</span>
          </div>
          <div className="form__input">
            <input type="text" required/>
            <span>Name</span>
          </div>
          <div className="form__input">
            <input type="password" required/>
            <span>Password</span>
          </div>
          <div className="form__input">
            <input type="password" required/>
            <span>Comfirm password</span>
          </div>
          <div className="form__input">
            <input type="text" required/>
            <span>Phone</span>
          </div>
          <div className="form__gender">
            <span>Gender:</span>
            <label htmlFor="male">
              <input type="radio" id='male' name='gender' checked/>
              <span className="radio"></span>
              <span>Male</span>
            </label>
            <label htmlFor="female">
              <input type="radio" id='female' name='gender' />
              <span className="radio"></span>
              <span>Female</span>
            </label>
          </div>
          <div className="form__submit-register">
            <button className='btn-submit-register'>Submit</button>
          </div>
        </form>
        <div className="form__info">
        <span>Do you already have an account? <NavLink to={'/login'}>Login</NavLink></span>
        </div>
      </div>
    </div>
  )
}

export default Register