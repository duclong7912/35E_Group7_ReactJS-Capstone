import React from 'react'

const Register = () => {
  return (
    <div className="register">
      <div className="title">
        <h1>Register</h1>
      </div>
      <form className='form__register'>
        <div className="form__content">
          <div className="form__input">
            <input type="text" required/>
            <span>Email</span>
          </div>
          <div className="form__input">
            <input type="text" required/>
            <span>Name</span>
          </div>
          <div className="form__input">
            <input type="text" required/>
            <span>Password</span>
            <i class="fa-solid fa-eye"></i>
          </div>
          <div className="form__input">
            <input type="text" required/>
            <span>Comfirm password</span>
            <i class="fa-solid fa-eye"></i>
          </div>
          <div className="form__input">
            <input type="text" required/>
            <span>Phone</span>
          </div>
          <div className="form__gender text-left">
            <span>Gender</span>
            <label htmlFor="male">
              <input type="radio" id='male' name='gender'/>
              <span>Male</span>
            </label>
            <label htmlFor="female">
              <input type="radio" id='female' name='gender'/>
              <span>Female</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register