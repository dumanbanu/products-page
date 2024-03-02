import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";





const Pagination = ({totalPages }) => {

    const {filterObject , setFilterObject} = useContext(ProductsContext)

    const goToPrevious = () => {
      
      setFilterObject(prevState => {
        return { ...prevState, page: prevState.page - 1 };
      });
    };
  
    const goToNext = () => {
      setFilterObject(prevState => {
        return { ...prevState, page: prevState.page + 1 };
      });      
    };



    
    const setFilterObjectByNumbers = (number: any) => {
    let newNumber = Number(number);


    setFilterObject(prevState => {
      return { ...prevState, page: newNumber};
    });    

   
    }

    const numberListArray = new Array(totalPages).fill(undefined)

    return (    
      <div className="pagination">

        {
          filterObject.page >1 &&
       <button onClick={goToPrevious}>&lt;</button>
        }
        {
          numberListArray.map((data , index) => {
            return (
                Boolean(Number(index))&&
                <button key={index} onClick={() => setFilterObjectByNumbers(Number(index))}>{index}</button>
            );
          })
        }

        <button>...</button>
        <button onClick={goToNext}>&gt;</button>
      </div>
    );
  };

  
  export default Pagination