import React, { useState, useContext, useEffect } from "react";
import { ProductsContext } from "../../context/productsContext";
import './style.css';

const Pagination = ({ totalPages }) => {
  const { filterObject, setFilterObject } = useContext(ProductsContext);
  const [visiblePages, setVisiblePages] = useState([]);

  useEffect(() => {
    const startPage = Math.max(1, filterObject.page - 2);
    const endPage = Math.min(totalPages, filterObject.page + 2);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
                       .slice(startPage - 1, endPage);
    setVisiblePages(pages);
  }, [filterObject.page, totalPages]);

  const goToPrevious = () => {
    if (filterObject.page > 1) {
      setFilterObject(prevState => ({
        ...prevState,
        page: prevState.page - 1
      }));
    }
  };

  const goToNext = () => {
    setFilterObject(prevState => ({
      ...prevState,
      page: prevState.page + 1
    }));
  };

  const setFilterObjectByNumbers = (number) => {
    let newNumber = Number(number);
    setFilterObject(prevState => ({ ...prevState, page: newNumber }));
  };

  return (
    <div className="pagination">
      {filterObject.page > 1 && (
        <button 
          onClick={goToPrevious} 
          disabled={filterObject.page <= 1} 
          className="pagination-button"
        >
          &lt;
        </button>
      )}
      {visiblePages.map(pageNumber => (
        <button 
          key={pageNumber} 
          onClick={() => setFilterObjectByNumbers(pageNumber)}
          className={`pagination-button ${filterObject.page === pageNumber ? 'active' : ''}`}
        >
          {pageNumber}
        </button>
      ))}
      <button className="pagination-button" disabled>...</button>
      {filterObject.page < totalPages && (
        <button 
          onClick={goToNext} 
          className="pagination-button"
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
