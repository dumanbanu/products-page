import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ProductsContext } from '../../context/productsContext'
import { searchProductsUsingGet } from '../../api/services/productService'
import ProductList from '../../components/product-list/Index'
import './style.css'
import FilterSortBy from '../../components/filter-sort-by'
import FilterWithSearch from '../../components/filter-with-search'
import { multiOptionalBrandsFilterOptions, multiOptionalModelFilterOptions } from '../../assets/filterOptions'
import Spinner from '../../components/spinner'


export default function Index() {

  const { setProductList, filterObject , productList } = useContext<any>(ProductsContext)
  const [isLoading , setIsLoading] = useState <boolean> (true)


  useEffect(() => {
    setIsLoading(true);
    searchProductsUsingGet(filterObject)
      .then(data => {
        setProductList(data);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, [filterObject.page]);


  return (

    <div className='row'>
      <div className='col-md-3 left'>
        <FilterSortBy />
        <FilterWithSearch title={"Brands"} multiOptionalFilterList={multiOptionalBrandsFilterOptions}/>
        <FilterWithSearch  title={"Model"} multiOptionalFilterList={multiOptionalModelFilterOptions} />
      </div>
      <div className='col-md-9 middle'>
      {isLoading ? (
          <Spinner />
        ) : (
          productList && productList.length > 0 ? (
            <ProductList />
          ) : (
            <div>Ürün bulunamadı</div>
          )
        )}
      </div>
    </div>


  )
}
