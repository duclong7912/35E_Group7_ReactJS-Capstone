import React from 'react'

const Login = () => {
  return (
    <div className="login">
      <div className="title">
        <h1>Login</h1>
      </div>
      <form className='form__login'>
        <div className="form__content">
          <div className="form__input">
            <input type="text" />
            <span>Email</span>
          </div>
          <div className="form__input">
            <input type="text" />
            <span>Password</span>
          </div>
          <div className="form__register">
            <span>Don’t have an account? <span>Sign up</span></span>
          </div>
          <div className="form__submit">
            <button className='btn-submit'>Login</button>
          </div>
          <div className="form__social">
            <button className='btn-fb'>
              <i class="fa-brands fa-facebook"></i>
              <span>Continue with Facebook</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login