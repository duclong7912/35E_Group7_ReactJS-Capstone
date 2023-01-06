import React from 'react'
import { NavLink } from 'react-router-dom'

const ShoeCard = (props) => {
    const prod = props.prod;
  return (
    <div>
        <div className="product__img">
                      <img src={prod?.image} alt="product" />
                    </div>
                    <div className="product__info">
                      <h4>{prod?.name}</h4>
                      <p>{prod?.shortDescription}</p>
                    </div>
                    <div className="product__footer">
                      <NavLink to={`/detail/${prod?.id}`} onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}>Buy now</NavLink>
                      <h6>${prod?.price}</h6>
                    </div>
    </div>
  )
}

export default ShoeCard