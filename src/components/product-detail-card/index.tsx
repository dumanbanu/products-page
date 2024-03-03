import React, { useEffect } from 'react'
import './style.css'
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { searchProductsUsingGet } from '../../api/services/productService';


export default function Index() {

const {selectedProduct ,setCartItems ,cartItems} = useContext(ProductsContext)
const {price , name , description} = selectedProduct



const addToCartItemsEventHandler = (productToAdd) => {
  const isProductInCart = cartItems.some(item => item.id === productToAdd.id);

  if (isProductInCart) {
    setCartItems(
      cartItems.map(item => 
        item.id === productToAdd.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  } else {
    setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
  }
};


  return (
      <div className="product-detail-card">
      <div className="product-detail-image" />
      <div className="product-detail-info">
        <h3 className="product-detail-name">{name}</h3>
        <p className="product-detail-price">{price}₺</p>
        <button className="product-detail-add-to-cart-btn" onClick={() => {addToCartItemsEventHandler(selectedProduct)}}>
          Add to Cart
        </button>
        <p className="product-detail-description">{description}</p>
      </div>
    </div>
  );
};
