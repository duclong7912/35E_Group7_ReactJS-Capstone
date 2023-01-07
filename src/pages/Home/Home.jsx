import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getAllProductAPI,
  getProductFavoriteAPI,
  likeProductAPI,
  unLikeProductAPI,
} from "../../redux/reducers/ProductReducer/productReducer";
import { Carousel } from "antd";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
const Home = () => {
  const dispatch = useDispatch();
  const { arrProduct, arrProductFavorite } = useSelector(
    (state) => state.productReducer
  );
  const { userLogin } = useSelector((state) => state.userReducer);

  const getAllProduct = () => {
    const actionProduct = getAllProductAPI();
    dispatch(actionProduct);
  };
  useEffect(() => {
    getProductFavorite();
    getAllProduct();
  }, []);

  const getProductFavorite = () => {
    if (userLogin) {
      const actionProductFavorite = getProductFavoriteAPI();
      dispatch(actionProductFavorite);
    }
  };

  const handleLikeProduct = async (id) => {
    return await likeProductAPI(id)
      .then((res) => {
        if (!res) {
          return;
        }
        getProductFavorite();
      })
      .catch((err) => console.log({ err }));
  };

  const handleUnLikeProduct = async (id) => {
    return await unLikeProductAPI(id)
      .then((res) => {
        if (!res) {
          return;
        }
        getProductFavorite();
      })
      .catch((err) => console.log(err));
  };

  const renderHeart = (prod) => {
    if (arrProductFavorite) {
      if (
        arrProductFavorite?.productsFavorite.some((item) => item.id === prod.id)
      ) {
        return (
          <i
            className="fa-solid fa-heart"
            onClick={() => handleUnLikeProduct(prod.id)}
          ></i>
        );
      } else {
        return (
          <i
            className="fa-regular fa-heart"
            onClick={() => handleLikeProduct(prod.id)}
          ></i>
        );
      }
    }
  };

  return (
    <div className="home">
      <div className="home__carousel">
        <div className="carousel__container">
          <Carousel autoplay={true} effect={"scroll"}>
            {arrProduct?.slice(10, 13).map((prod, i) => {
              return (
                <div key={i}>
                  <div className="carousel__content" key={i}>
                    <div className="carousel__left">
                      <img src={prod.image} alt="product" />
                    </div>
                    <div className="carousel__right">
                      <h4>{prod.name}</h4>
                      <p>{prod.shortDescription}</p>
                      <NavLink to={`/detail/${prod?.id}`}>Buy now</NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="home__product">
        <h1>Product Feature</h1>
        <div className="product__container">
          <div className="product__content row">
            {arrProduct?.map((prod, i) => {
              return (
                <div className="product__item col-12 col-sm-6 col-lg-4" key={i}>
                  <div className="product__card">
                    {userLogin ? <div className="heart">{renderHeart(prod)}</div> :
                     <div className="heart"><i className="fa-regular fa-heart"></i></div> }
                    <ShoeCard prod={prod}/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
