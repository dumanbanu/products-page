import React from 'react';
import './style.css';
import ProductCard from "../product-card/index";
import Pagination from '../pagination/Index';
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';

const ProductsGrid = () => {

  const { productList, filterObject } = useContext(ProductsContext)

  const totalPages = filterObject?.page + 2;
  
  return (
<div className="container">
      <div className="row">
        {productList?.map((product, index) => (
          <div key={index} className="col-md-6 col-sm-12 col-xl-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default ProductsGrid;
