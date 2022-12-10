import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login text-center">
      <div className="title">
        <h1>Login</h1>
      </div>
      <div className="login__wrapper">
        <form className='form__login'>
          <div className="form__content">
            <div className="form__input">
              <input type="text" required/>
              <span>Email</span>
            </div>
            <div className="form__input">
              <input type="password" required/>
              <span>Password</span>
              <i className="fa-solid fa-eye"></i>
            </div>
            <div className="form__submit-login">
              <button className='btn-submit-login'>Login</button>
            </div>
          </div>
        </form>
        <div className="form__info">
          <span>Don’t have an account? <NavLink to={'/register'}>Register</NavLink></span>
        </div>
        <div className="form__social">
          <button className='btn-fb'>
            <i className="fa-brands fa-facebook"></i>
            <span>Continue with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login