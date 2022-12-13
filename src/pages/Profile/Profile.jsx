import React from 'react'

const Profile = () => {
  return (
    <div className="profile">
      <div className="title">
        <h1>Profile</h1>
      </div>
      <div className="profile__wrapper">
        <div className="profile__container">
          <div className="profile__content">
            <div className="profile__avt">
              <img src="./img/download 1.png" alt="avatar" />
            </div>
            <div className="profile__info row">
              <div className="form__input col-6">
                <input type="email" disabled/>
                <span>Email</span>
              </div>
              <div className="form__input col-6">
                <input type="email" disabled/>
                <span>Name</span>
              </div>
              <div className="form__input col-6">
                <input type="email" disabled/>
                <span>Phone</span>
              </div>
              <div className="form__input col-6">
                <input type="email" disabled/>
                <span>Password</span>
              </div>
              <div className="form__gender col-12">
                <span>Gender:</span>
                <label htmlFor="male">
                  <input type="radio" id='male' name='gender' disabled checked/>
                  <span className="radio"></span>
                  <span>Male</span>
                </label>
                <label htmlFor="female">
                  <input type="radio" id='female' name='gender' disabled/>
                  <span className="radio"></span>
                  <span>Female</span>
                </label>
              </div>
              <div className="profile__update col-12">
                <button>Update</button>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Profile