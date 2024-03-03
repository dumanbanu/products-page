import React from 'react';
import '../style.css';

const Checkout = ({ totalPrice }) => (
  <div className="checkout">
    <h2>Checkout</h2>
    <div className="total-price">Total Price: {totalPrice}₺</div>
    <button className="checkout-button">Checkout</button>
  </div>
);

export default Checkout;