import React, { useEffect } from "react";
import Header from "../header/Index"
import Cart from "../cart";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import Checkout from "../cart/checkout/Index";
import "./style.css";

function Layout({children}) {



  useEffect(() => {
    let savedCart = localStorage.getItem('cart');
savedCart =  savedCart ? JSON.parse(savedCart) : [];
setCartItems(savedCart)
  } , [])

  const {totalPrice , cartItems ,setCartItems } = useContext(ProductsContext)

  function onIncrease(id) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
  
  function onDecrease(id) {
    setCartItems((currentItems) => {
      const newItems = currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item 
      );
      return newItems.filter(item => item.quantity > 0);
    });
  }


  return (
    <>
    <Header />
    <div className="container d-flex justify-content-center p-0">
      <div className="row col-12">
        <div className="col-xs-12 col-lg-12">
          <div className="row">
            <div className="col-xs-12 col-md-9 page-contents">
              {children}
            </div>
            <div className="col-xs-12 col-md-3 ordered-cart-container">
              {Boolean(cartItems.length) && (
                <Cart items={cartItems} onDecrease={onDecrease} onIncrease={onIncrease} />
              )}
              <Checkout totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Layout;