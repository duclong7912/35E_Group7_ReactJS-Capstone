import React, { useEffect, useState } from 'react'
import { changePasswordAPI } from '../../redux/reducers/userReducer/userReducer';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModalChangePassword = (props) => {
    const [values, setValues] = useState({
        newPassword: '',
    });
    const [errors, setErrors] = useState({})
    const [passwordIcon, setPasswordIcon] = useState(false);
    const [submit, setSubmit] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        setSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submit) {
            const actionChangePassword = changePasswordAPI(values);
            dispatch(actionChangePassword);
            toast.success('Change password successfully.', {
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
        if (value.newPassword.length < 8) {
            error.newPassword = 'Password must be more than 8 characters.'
        }
        return error;
    }

    const handleChangeIcon = () => {
        setPasswordIcon(!passwordIcon)
    }

    const closeModal = () => {
        props.closeModal(false);
    }

  return (
    <div className="changePassword__overlay">
        <ToastContainer />
        <div className="changePassword__container">
            <div className="changePassword__content">
                <div className="closeModal" onClick={closeModal}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="title">
                    <h2>Change Password</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form__input">
                        <input id='newPassword' name='newPassword' type={passwordIcon ? 'text' : 'password'} required onChange={handleChange}/>
                        <span>New password</span>
                        <a onClick={handleChangeIcon}>{passwordIcon ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</a>
                        {errors.newPassword && <div className='messError'>{errors.newPassword}</div>}
                    </div>
                    <div className="changePassword__submit">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ModalChangePassword