import React, { useState } from 'react'
import './style.css'

export default function Index({title ='',multiOptionalFilterList= []}) {
  const [selectedBrands, setSelectedBrands] = useState({});
  const [listArray, setListArray] = useState(multiOptionalFilterList);
  const [filteredArray, setFilteredArray] = useState([...listArray]);
  const [searchInput, setSearchInput] = useState('');


    const handleBrandChange = (brand) => {
      setSelectedBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
    };
    const searcInputSearchEventHandler = (value)=>{
      setSearchInput(value)
    }
    const searchInputClickEventHandler = () => {
      if (searchInput.trim() !== '') {
        let arr = listArray.filter((item) => item.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()));
        setFilteredArray(arr);
      } else {
        setFilteredArray(listArray);
      }
    };
    const onKeyDownEventHandler = (event) =>{
      if(event.key === "Enter"){
        searchInputClickEventHandler();
      }
  }


  return (
    <div>
      <div className='title'>{title}</div>
      <div className="search-and-brand-filter">
        <div className="search-box">
          <input type="text" placeholder="Search" onKeyDown={onKeyDownEventHandler} onChange={(event)=> {searcInputSearchEventHandler(event.target.value)}} />
          <button type="submit" onClick = {searcInputSearchEventHandler}>
             <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="brand-filter">
          {filteredArray?.map((brand,index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={!!selectedBrands[brand]}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};