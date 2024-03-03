import React from 'react';
import "./style.css";
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import {useNavigate} from "react-router-dom"




export default function Index() {

  const navigater = useNavigate()
  const {totalPrice} = useContext(ProductsContext)


  return (
    <header className="main-header">
    <div className="logo pointer" onClick={() => {navigater("/")}}>Eteration</div>
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button type="submit">Q</button>
    </div>
    <div className="user-info">
      <span className="cart-info">{totalPrice} ₺  </span>
      <span className="user-name">Kerem</span>
    </div>
  </header>
  )
}
