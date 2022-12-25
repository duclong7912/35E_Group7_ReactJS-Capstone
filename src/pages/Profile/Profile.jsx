import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profileAPI, profileAction } from '../../redux/reducers/userReducer/userReducer';
import Orders from '../../components/Order/Orders'
import UpdateProfile from "../../components/UpdateProfile/UpdateProfile";
import ModalChangePassword from '../../components/ModalChangePassword/ModalChangePassword';
import { NavLink } from 'react-router-dom';
const Profile = () => {
  const { profile } = useSelector(state => state.userReducer);

  const [history, setHistory] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=> {
    const actionProfile = profileAPI();
    dispatch(actionProfile)
  },[])

  const handleFavorite = (e) => {
    setHistory(false);
    setFavorite(true);
  }

  const handleHistory = () => {
    setHistory(true);
    setFavorite(false);
  }

  const handleOpenModal = () => {
    document.querySelector('body').classList.toggle("open-modal");
    setOpenModal(true)
  }

  const handleCloseModal = (value) => {
    document.querySelector('body').classList.remove("open-modal");
    setOpenModal(value)
    setChangePassword(value);
  }

  const modalChangePassword = () => {
    document.querySelector('body').classList.toggle("open-modal");
    setChangePassword(true);
  }

  const closeModal = (value) => {
    setOpenModal(value)
  }

  return (
    <div className="profile">
      <div className="title">
        <h1>Profile</h1>
      </div>
      {openModal && 
        <div className="updateProfile">
          <UpdateProfile closeModal={handleCloseModal}/>
        </div>
      }
      {changePassword && 
      <div className="changePassword">
        <ModalChangePassword closeModal={handleCloseModal}/>
      </div>
      }
      <div className="profile__wrapper">
        <div className="profile__container">
          <div className="profile__content">
            <div className="profile__wrap">
              <div className="profile__avt">
                <img src={profile.avatar} alt="avatar" />
              </div>
              <div className="profile__info row">
                <div className="form__input col-12 col-md-6">
                  <input type="email" value={profile?.email} disabled/>
                  <span>Email</span>
                </div>
                <div className="form__input col-12 col-md-6">
                  <input type="text" value={profile?.name} disabled/>
                  <span>Name</span>
                </div>
                <div className="form__input col-12 col-md-6">
                  <input type="number" value={profile?.phone} disabled/>
                  <span>Phone</span>
                </div>
                <div className="form__input col-12 col-md-6">
                  <input type="password" disabled/>
                  <span>Password</span>
                </div>
                <div className="form__gender col-12 ">
                  <span>Gender:</span>
                  <label htmlFor="male">
                    <input type="radio" id='male' name='gender' disabled checked={profile?.gender ? true : false} />
                    <span className="radio"></span>
                    <span>Male</span>
                  </label>
                  <label htmlFor="female">
                    <input type="radio" id='female' name='gender' disabled checked={profile?.gender ? false : true} />
                    <span className="radio"></span>
                    <span>Female</span>
                  </label>
                </div>
                <div className="profile__update col-6">
                  <button onClick={handleOpenModal}>Change profile</button>
                </div>
                <div className="profile__update-password col-6">
                  <button onClick={modalChangePassword}>Change password</button>
                </div>
              </div>
            </div>
            <div className="profile__tabs">
              <div className="profile__tab" onClick={handleHistory} style={{color: history ? '#dc4f72' : '#000'}}>
                Order history
              </div>
              <div className="profile__tab" style={{color: favorite ? '#dc4f72' : '#000'}} onClick={handleFavorite}>
                Favorite
              </div>
            </div>
            <div className="profile__tabs-container">
            { history &&
              <div className="profile__tabs-content">
                {profile?.ordersHistory?.map((item, i) => {
                  return <div className='profile__tabs-info' key={i}>
                      <Orders item={item}/>
                  </div>
                })}
              </div>
            }
            { favorite && 
            <div className="profile__tabs-content">
              
            </div>
            }
            </div>
            <div className="profile__pages">
              <div className="profile__page"><i className="fa-solid fa-angle-left"></i></div>
              <div className="profile__page">1</div>
              <div className="profile__page">2</div>
              <div className="profile__page">...</div>
              <div className="profile__page">9</div>
              <div className="profile__page">10</div>
              <div className="profile__page"><i className="fa-solid fa-angle-right"></i></div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Profile