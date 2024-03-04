import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import {useNavigate} from "react-router-dom"
import './style.css'




const ProductCard = ({ product }) => {


  const navigate = useNavigate()
const {cartItems , setCartItems , setSelectedProduct} = useContext(ProductsContext)

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

const navigateToDetailPage = (pr :any) => {
  setSelectedProduct(pr);
  navigate("/detail");
  }
  


  return(
    <div className="product-card" >
      <div className="product-image pointer"onClick={() => { navigateToDetailPage(product) }}></div>
      <div className="product-price pointer"onClick={() => { navigateToDetailPage(product) }}>{product.price} ₺</div>
      <div className="product-name pointer"onClick={() => { navigateToDetailPage(product) }}> {product.name.length > 16 ? `${product.name.slice(0, 16)}...` : product.name}</div>
      <button className="add-to-cart-btn"  onClick={()  => {addToCartItemsEventHandler(product)}} >Add to Cart</button>
    </div>
  );

}  


export default ProductCard;