import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Validation from '../../components/Validation/Validation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HashLoader from "react-spinners/HashLoader";

const Register = () => {
  
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: null,
  });

  const [errors, setErrors] = useState({})
  const [submit, setSubmit] = useState(false);
  const [passwordIcon, setpasswordIcon] = useState(false);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(false);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }
  
  const handleSubmit = (e) => {
    e?.preventDefault();
    setErrors(Validation(values));
    setSubmit(true)
  }

  const handleChangePasswordIcon = (e) => {
    setpasswordIcon(!passwordIcon)
  }

  const handleChangeConfirmPasswordIcon = (e) => {
    setConfirmPasswordIcon(!confirmPasswordIcon)
  }

  useEffect(() => {
    const fetchValues = async () => {  
      if (Object.keys(errors).length === 0 && submit) {
        await axios({
          url: 'https://shop.cyberlearn.vn/api/Users/signup',
          method: 'POST',
          data: {
            email: values.email,
            password: values.password,
            name: values.name,
            gender: values.gender,
            phone: values.phone
          }
        }).then((res) => {
          setLoading(true)  
          toast.success('Register account successfully.', {
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
            setLoading(false)
            navigate('/users/login')
          },3000)
        }).catch((error) => {
          toast.error('Email already exists.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
      }
    }
    fetchValues();
  }, [errors])

  return (
    <div className="register text-center">      
      <ToastContainer />
      {/* <div className="title">
        <h1>Register</h1>
      </div> */}
      <div className="register__wrapper"> 
        {loading ? <HashLoader color="#dc4f72" size={50} /> : 
        <div className="register__wrap">
          <div className="title">
            <h1>Register</h1>
          </div>
          <form className="form__register" onSubmit={handleSubmit}>
            <div className="form__input">
              <input id='email' name='email' type="text" value={values.email} required onChange={handleChange}/>
              <span>Email</span>
              {errors.email && <div className='messError'>{errors.email}</div>}
            </div>
            <div className="form__input">
              <input id='name' name='name' type="text" value={values.name} required onChange={handleChange}/>
              <span>Name</span>
              {errors.name && <div className='messError'>{errors.name}</div>}
            </div>
            <div className="form__input">
              <input id='password' name='password' type={passwordIcon ? 'text' : 'password'} value={values.password} required onChange={handleChange}/>
              <span>Password</span>
              <a onClick={handleChangePasswordIcon}>{passwordIcon ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</a>
              {errors.password && <div className='messError'>{errors.password}</div>}
            </div>
            <div className="form__input">
              <input id='confirmPassword' name='confirmPassword' type={confirmPasswordIcon ? 'text' : 'password'} value={values.confirmPassword} required onChange={handleChange}/>
              <span>Confirm password</span>
              <a onClick={handleChangeConfirmPasswordIcon}>{confirmPasswordIcon ? <i className="fa-solid fa-eye-slash"></i> : <i className="fa-solid fa-eye"></i>}</a>
              {errors.confirmPassword && <div className='messError'>{errors.confirmPassword}</div>}
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
            <div className="form__submit-register">
              <button type='submit' className='btn-submit-register'>Submit</button>
            </div>
          </form>
          <div className="form__info">
          <span>Do you already have an account? <NavLink to={'/users/login'}>Login</NavLink></span>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Register