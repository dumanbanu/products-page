import React from 'react';
import './style.css';
import ProductCard from "../product-card/index";
import Pagination from '../pagination/Index';
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';

const ProductsGrid = () => {

  const { productList, filterRequest } = useContext(ProductsContext)

  const totalPages = filterRequest?.page + 4 | 5;


  return (
    <div>
      <div className="products-grid">
        {productList?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default ProductsGrid;
