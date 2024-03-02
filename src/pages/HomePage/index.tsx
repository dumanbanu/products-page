import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { searchProductsUsingGet } from '../../api/services/productService'
import ProductList from '../../components/product-list/Index'
import './style.css'
import FilterSortBy from '../../components/filter-sort-by'


export default function Index() {

  const { productList, setProductList, filterObject } = useContext<any>(ProductsContext)



  useEffect(() => {
    console.log(filterObject)
    searchProductsUsingGet(filterObject).then(data => {
      setProductList(data)
    })

  }, [filterObject.page])

  return (

    <div className='home-page-container'>
      <div className='left'> <FilterSortBy></FilterSortBy></div>
      <div className='middle'><ProductList></ProductList></div>
      <div className='right'><FilterSortBy></FilterSortBy></div>

    </div>

  )
}
