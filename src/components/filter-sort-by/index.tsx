
import React, { useEffect, useState } from 'react'
import './style.css'
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { searchProductsUsingGet } from '../../api/services/productService';



export default function Index() {

  const {productList , setProductList ,setFilterObject , filterObject} = useContext(ProductsContext);
  const [selectedOption, setSelectedOption] = useState('newToOld');


  
  const sortFilterChangeEventHandler = (option) => {

    console.log("asjdakjshd")
    const newFilters = option?.parameter.reduce((filters, param) => {
      filters[param.key] = param.value;
      return filters;
    }, {});
    
    setFilterObject(prevState => {
      return { ...prevState, ...newFilters};
    });  
  }

  useEffect(() => {

    if (filterObject.sortBy & filterObject.order) {
      searchProductsUsingGet(filterObject).then(data => {
        console.log(data)
        setProductList(data);
      });
    }

  }, [filterObject, setProductList]);


  return (
    <div className="sort-options">
    <h4>Sort By</h4>
    {[
      { id: 'order', label: 'Old to new' , value : "" },
      { id: 'newToOld', label: 'New to old' },
      { id: 'orderBy', label: 'Price high to low' , parameter : [{key : "sortBy" , value:"price"} , {key:"order"  , value: "desc" }] },
      { id: 'priceLowToHigh', label: 'Price low to High' }
    ].map((option) => (
      <label key={option.id}>
        <input
          type="radio"
          name="sortOption"
          checked={selectedOption === option.id}
          onChange={() =>sortFilterChangeEventHandler(option)}
        />
        {option.label}
      </label>
    ))}
  </div>
  )
}
