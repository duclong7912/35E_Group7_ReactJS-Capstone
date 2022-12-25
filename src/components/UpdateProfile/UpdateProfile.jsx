import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from '../Validation/Validation';
import { updateProfileAPI } from '../../redux/reducers/userReducer/userReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateProfile = (props) => {
    const { profile } = useSelector(state => state.userReducer);
    const [values, setValues] = useState({
        email: profile.email,
        name: profile.name,
        password: '',
        phone: profile.phone,
        gender: null,
      });
      const [errors, setErrors] = useState({})
      const [submit, setSubmit] = useState(false);
      const navigate = useNavigate();
      const dispatch = useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    }
      
    const handleSubmit = (e) => {
        e?.preventDefault();
        setErrors(validation(values));
        setSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submit) {
            const actionUpdateProfile = updateProfileAPI(values);
            dispatch(actionUpdateProfile);
            toast.success('Update profile successfully.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    },[errors])
      
    const validation = (value) => {
        const error = {};
        const regexName = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        const regexNumber = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        const regexNumber2 = /^[0-9]+$/;
        if (!value.name) {
            error.name = 'Name cannot be blank.'
        } else if (!value.name.match(regexName)) {
            error.name = 'Name is invalid.'
        }
        if (!value.phone) {
            error.phone = 'Phone cannot be blank.'
        } else if (!value.phone.match(regexNumber)) {
            error.phone = 'Phone is invalid.'
        } else if (!value.phone.match(regexNumber2)) {
            error.phone = 'Phone is invalid.'
        }

        if (value.gender === null) {
            error.gender = 'Please select your gender.' 
        }

        return error;
    }

    const closeModal = () => {
        props.closeModal(false);
    }

  return (
    <div className='updateProfile__container'>
        <ToastContainer />
        <div className="updateProfile__overlay">
            <div className="updateProfile__wrapper">
                <div className="updateProfile__content">
                    <div className="closeModal" onClick={closeModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <div className="title">
                        <h2>Update profile</h2>
                    </div>
                    <div className="updateProfile__form">
                        <form className="form__register" onSubmit={handleSubmit}>
                            <div className="form__input">
                                <input id='email' name='email' type="text" value={values.email} required onChange={handleChange} disabled/>
                                <span>Email</span>
                            </div>
                            <div className="form__input">
                                <input id='name' name='name' type="text" value={values.name} required onChange={handleChange}/>
                                <span>Name</span>
                                {errors.name && <div className='messError'>{errors.name}</div>}
                            </div>
                            <div className="form__input">
                                <input id='password' name='password' type='password' value={values.password} disabled />
                                <span>Password</span>
                            </div>
                            <div className="form__input">
                                <input id='phone' name='phone' type="text" value={values.phone} required onChange={handleChange}/>
                                <span>Phone</span>
                                {errors.phone && <div className='messError'>{errors.phone}</div>}
                            </div>
                            <div className="gender">
                                <div className="form__gender">
                                    <span>Gender:</span>
                                    <label htmlFor="male">
                                        <input type="radio" id='male' name='gender' value={true} onChange={handleChange}/>
                                        <span className="radio"></span>
                                        <span>Male</span>
                                    </label>
                                    <label htmlFor="female">
                                        <input type="radio" id='female' name='gender' value={false} onChange={handleChange}/>
                                        <span className="radio"></span>
                                        <span>Female</span>
                                    </label>
                            </div>
                            {errors.gender && <div className='messError'>{errors.gender}</div>}
                            </div>
                            <div className="form__submit-update">
                            <button type='submit' className='btn-submit-update'>Update</button>
                            </div>
                         </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile