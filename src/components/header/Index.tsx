import React, { useEffect, useState } from 'react';
import "./style.css";
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import {useNavigate} from "react-router-dom"
import { searchProductsUsingGet } from '../../api/services/productService';
import FilterRequest from '../../api/services/model/filterRequest';




export default function Index() {

  const navigater = useNavigate()
  const {totalPrice ,  setFilterObject , filterObject , setProductList} = useContext(ProductsContext)

  const [searchInputData , setSearchInputData] = useState<string|null>();

  const searchButtonClickEventHandler = ()=> {
    setFilterObject(prevState => {
      return { ...prevState, name: searchInputData };
    });    
  }

  useEffect(() => {
    if (filterObject.name) {
      searchProductsUsingGet(filterObject).then(data => {
        setProductList(data);
      });
    }
  }, [filterObject, setProductList]);

  return (
    <header className="main-header">
    <div className="logo pointer" onClick={() => {navigater("/")}}>Eteration</div>
    <div className="search-bar">
      <input type="text" placeholder="Search" onChange={(e)=> {setSearchInputData(e.target.value)}}/>
      <button onClick={searchButtonClickEventHandler} type="submit">Q</button>
    </div>
    <div className="user-info">
      <span className="cart-info">{totalPrice} ₺  </span>
      <span className="user-name">Kerem</span>
    </div>
  </header>
  )
}
