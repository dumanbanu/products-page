import React from 'react'
import '../style.css'

export default function Index({ item, onDecrease, onIncrease }) {



  
  return (
    <div className="cart-item">
    <div className="item-details">
      <div className="item-name">{item.name}</div>
      <div className="item-price">{item.price}₺</div>
    </div>
    <div className="quantity-controls">
      <button onClick={() => onDecrease(item.id)}>-</button>
      <span className="quantity">{item.quantity}</span>
      <button onClick={() => onIncrease(item.id)}>+</button>
    </div>
  </div>
  )
}
