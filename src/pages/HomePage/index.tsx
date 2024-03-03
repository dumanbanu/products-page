import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { searchProductsUsingGet } from '../../api/services/productService'
import ProductList from '../../components/product-list/Index'
import './style.css'
import FilterSortBy from '../../components/filter-sort-by'
import FilterWithSearch from '../../components/filter-with-search'
import Cart from '../../components/cart'
import Checkout from '../../components/cart/checkout/Index'


export default function Index() {

  const { setProductList, filterObject  , setCartItems } = useContext<any>(ProductsContext)


  useEffect(() => {
    searchProductsUsingGet(filterObject).then(data => {
      setProductList(data)
    })


  }, [filterObject.page])




  

  return (

    <div className='home-page-container'>
      <div className='left'>
         <FilterSortBy></FilterSortBy>
         <FilterWithSearch></FilterWithSearch>
         <FilterWithSearch></FilterWithSearch>
         </div>
      <div className='middle'><ProductList></ProductList></div>
      <div className='right'>

      </div>

    </div>

  )
}
