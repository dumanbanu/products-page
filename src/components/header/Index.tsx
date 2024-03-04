import React, { useEffect, useState } from 'react';
import "./style.css";
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { useNavigate } from "react-router-dom"
import { searchProductsUsingGet } from '../../api/services/productService';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Index() {

  const navigater = useNavigate()
  const { totalPrice, setFilterObject, filterObject, setProductList } = useContext(ProductsContext)

  const [searchInputData , setSearchInputData] = useState<string|null>(null);
  const searchButtonClickEventHandler = () => {
    setFilterObject(prevState => {
      return { ...prevState, name: searchInputData };
    });
  }


  const onKeyDownEventHandler = (event) =>{
    if(event.key === "Enter"){
      searchButtonClickEventHandler();
    }
}
  useEffect(() => {

      searchProductsUsingGet(filterObject).then(data => {
        setProductList(data);
      });
    
  }, [filterObject, setProductList]);

  return (
    <div className="container-fluidu bg-primary py-2">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-10 col-lg-12 col-xl-12">
          <div className="row">
            <div className="col-xs-4 col-md-2 d-flex align-items-center">
              <div className="logo" onClick={() => navigater("/")}>Eteration</div>
            </div>
            <div className="col-xs-4 col-md-3 d-flex align-items-center ">
              <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search"
                  value={searchInputData}
                  onKeyDown={(event) => { onKeyDownEventHandler(event) }}
                  onChange={(e) => setSearchInputData(e.target.value)}
                />
                <button className="search-button" onClick={searchButtonClickEventHandler}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-xs-4 col-md-7 d-flex align-items-center justify-content-end">
              <div className="user-info">
                <span className="cart-info me-2"> <i className="fas fa-briefcase "></i>{totalPrice} ₺</span>
                <span className="user-name" > <i className="fas fa-user "></i>Banu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
