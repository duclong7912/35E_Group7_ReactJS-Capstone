import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getProductByIdAPI, productCartAction } from '../../redux/reducers/ProductReducer/productReducer';
import { useEffect } from 'react';
import ShoeCard from '../../components/ShoeCard/ShoeCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {

  const {userLogin} = useSelector(state => state.userReducer)
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {productDetail} = useSelector(state => state.productReducer)
  const [number, setNumber] = useState(1);

  const getProductById = () => {
    const action = getProductByIdAPI(param.id);
    dispatch(action);
  }

  const handleSize = (index) => {
    let size = document.querySelectorAll(".size");
    for (let t of size) {
      t.className = 'size';
    }
    size[index].classList.toggle('active')
  }

  useEffect(() => {
    getProductById();
  },[param.id])

  const handleCart = () => {
    if(!userLogin) {
      toast.info('Login to continue.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      const itemCart = {...productDetail, quantity: number};
      const action = productCartAction(itemCart);
      dispatch(action)
    }
  }

  return (
    <div className="detail">
      <ToastContainer />
      <div className="detail__infoProduct">
        <div className="infoProduct__content row">
          <div className="infoProduct__left col-4">
            <img src={productDetail?.image} alt="product" />
          </div>
          <div className="infoProduct__right col-8">
            <div className="infoProDuct__info">
              <h4 id="name">{productDetail?.name}</h4>
              <p id="info">{productDetail?.description.length > 150 ? productDetail?.description.substring(0,150) + '...' : productDetail?.description}</p>
            </div>
            <div className="infoProDuct__size">
              <h5>
                <i className="fa-solid fa-check"></i>
                Available size</h5>
              <ul id="arrSize">
                {productDetail?.size.map((item, i) => {
                  return <li className="size" key={i} onClick={() => {handleSize(i)}}>{item}</li>
                })}
              </ul>
            </div>
            <div className="infoProDuct__buy">
              <h5 id="price">
              <i className="fa-solid fa-tags"></i>
                {productDetail?.price}$</h5>
              <span className="btn" onClick={() => setNumber(number + 1)}>+</span>
              <span className="num">{number}</span>
              <span className="btn" onClick={() => {
                if(number <= 1) {
                  return
                }
                setNumber(number - 1)
              }}>-</span>
              <div className="infoProDuct__button">
                <button onClick={handleCart}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail__relateProduct">
        <h1>Relate Product</h1>
        <div className="relateProduct__container">
          <div className="relateProduct__content row">
          {productDetail?.relatedProducts?.map((prod, i) => {
              return (
                <div className="product__item col-12 col-sm-6 col-lg-4" key={i}>
                  <div className="product__card">
                    <ShoeCard prod={prod}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail