import React from 'react';
import '../style.css';

const Checkout = ({ totalPrice }) => (
  <div>
    <div className='title mt-3'>Checkout</div>
    <div className="checkout">
      <div className="total-price">

        Total Price:
        <span style={{color:'#007bff', marginLeft:2}}>
          {totalPrice}₺
        </span>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  </div>
);

export default Checkout;