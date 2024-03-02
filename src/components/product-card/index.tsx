import React from "react";




const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image"></div>
    <div className="product-price">{product.price}</div>
    <div className="product-name">{product.name}</div>
    <button className="add-to-cart-btn">Add to Cart</button>
  </div>
);


export default ProductCard;