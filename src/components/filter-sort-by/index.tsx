
import React, { useEffect, useState } from 'react'
import './style.css'
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';



export default function Index() {

  const {productList , setProductList} = useContext(ProductsContext);
  const [selectedOption, setSelectedOption] = useState('newToOld');


  
  const sortFilterChangeEventHandler = (option) => {
    setSelectedOption(option)
    console.log(option)
  }



  return (
    <div className="sort-options">
    <h4>Sort By</h4>
    {[
      { id: 'order', label: 'Old to new' , value : "" },
      { id: 'newToOld', label: 'New to old' },
      { id: 'orderBy', label: 'Price high to low' , value : "price"},
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
