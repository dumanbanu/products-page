import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import './style.css'



const Pagination = ({ totalPages }) => {

  const { filterObject, setFilterObject } = useContext(ProductsContext)

  const goToPrevious = () => {

    if (filterObject.page > 1) {
      setFilterObject(prevState => ({
        ...prevState,
        page: prevState.page - 1
      }));
    }
  };

  const goToNext = () => {
    if (filterObject.page < totalPages) {
      setFilterObject(prevState => ({
        ...prevState,
        page: prevState.page + 1
      }));
    }
  };



  const setFilterObjectByNumbers = (number: any) => {
    let newNumber = Number(number);


    setFilterObject(prevState => {
      return { ...prevState, page: newNumber };
    });


  }

  const numberListArray = new Array(totalPages).fill(undefined)

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
    {numberListArray.map((_, index) => {
      const pageNumber = index + 1;
      return (
        <button 
          key={pageNumber} 
          onClick={() => setFilterObjectByNumbers(pageNumber)}
          className={`pagination-button ${filterObject.page === pageNumber ? 'active' : ''}`}
        >
          {pageNumber}
        </button>
      );
    })}
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


export default Pagination