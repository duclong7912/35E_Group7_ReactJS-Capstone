import React from 'react'

const orderHistory = (props) => {
  const {item} = props;
  return (
    <div>
        <h6>+ Orders have been placed on <span>{item.date}</span></h6>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th> 
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                {item.orderDetail.map((prod, i) => {
                  return  <tr key={i}>
                    <td>{item.id}</td>
                    <td><img src={prod.image} alt="product" /></td>
                    <td>{prod.name}</td>
                    <td>${prod.price}</td>
                    <td>{prod.quantity}</td>
                    <td>${prod.price}</td>
                  </tr>
                })}
                </tbody>
              </table>
    </div>
  )
}

export default orderHistory