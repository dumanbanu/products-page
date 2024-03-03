import React, { useState } from 'react'
import './style.css'

export default function Index() {
  const [selectedBrands, setSelectedBrands] = useState({});


    const handleBrandChange = (brand) => {
      setSelectedBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
    };

  return (
    <div className="search-and-brand-filter">
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button type="submit">Q</button>
      </div>
      <div className="brand-filter">
        {['Apple', 'Samsung', 'Huawei'].map((brand) => (
          <label key={brand}>
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
  );
};