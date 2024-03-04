import React, { useEffect } from "react";
import Header from "../header/Index"
import Cart from "../cart";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import Checkout from "../cart/checkout/Index";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

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
    <Container className="d-flex justify-content-center p-0">
      <Row>
        <Col xs={12} className="col-10">
          <Row>
            <Col xs={12} lg={9} className="page-contents">
              {children}
            </Col>
            <Col xs={12} lg={3} className="ordered-cart-container">
              {Boolean(cartItems.length) && (
                <Cart items={cartItems} onDecrease={onDecrease} onIncrease={onIncrease} />
              )}
              <Checkout totalPrice={totalPrice} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default Layout;