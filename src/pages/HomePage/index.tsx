import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { searchProductsUsingGet } from '../../api/services/productService'
import ProductList from '../../components/product-list/Index'
import './style.css'
import FilterSortBy from '../../components/filter-sort-by'
import FilterWithSearch from '../../components/filter-with-search'


export default function Index() {

  const { setProductList, filterObject } = useContext<any>(ProductsContext)


  useEffect(() => {
    searchProductsUsingGet(filterObject).then(data => {
      setProductList(data)
    })
  }, [filterObject.page])


  return (
    <div className='container home-page-container col-lg-12 col-md-12'>
    <div className='row '>
      <div className='col-12 col-md-3 left'>
        <FilterSortBy />
        <FilterWithSearch title={"Brands"}/>
        <FilterWithSearch  title={"Model"} />
      </div>
      <div className='col-12 col-md-9 middle'>
        <ProductList />
      </div>
      <div className='col-12 col-md-4 right'>
      </div>
    </div>
  </div>

  )
}
