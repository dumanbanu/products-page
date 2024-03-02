import React from 'react';
import "./style.css";

export default function Index() {
  return (
    <header className="main-header">
    <div className="logo">Eteration</div>
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button type="submit">Q</button>
    </div>
    <div className="user-info">
      <span className="cart-info">117.000₺</span>
      <span className="user-name">Kerem</span>
    </div>
  </header>
  )
}
