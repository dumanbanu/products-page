
import React, { useEffect, useState } from 'react'
import './style.css'
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
import { searchProductsUsingGet } from '../../api/services/productService';



export default function Index() {

  const { setProductList ,setFilterObject , filterObject} = useContext(ProductsContext);
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
    setSelectedOption(option.id)
  }

  useEffect(() => {
    if (filterObject.sortBy && filterObject.order) {
      searchProductsUsingGet(filterObject).then(data => {
        console.log(data)
        setProductList(data);
      });
    }

  }, [filterObject, setProductList,selectedOption,setSelectedOption]);


  return (
    <div>
      <div className='sort-by'>Sort By</div>
    <div className="sort-options">
    {[
     { id: 'order', label: 'Old to new' , value : "" , parameter : [{key : "sortBy" , value:"createdAt"} , {key:"order"  , value: "desc" }] },
     { id: 'newToOld', label: 'New to old' , parameter : [{key : "sortBy" , value:"createdAt"} , {key:"order"  , value: "asc" }] },
     { id: 'orderBy', label: 'Price high to low' , parameter : [{key : "sortBy" , value:"price"} , {key:"order"  , value: "desc" }] },
     { id: 'priceLowToHigh', label: 'Price low to High' , parameter : [{key : "sortBy" , value:"price"} , {key:"order"  , value: "asc" }] }
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
  </div>
  )
}
