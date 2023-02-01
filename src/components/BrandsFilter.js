import React, { useState } from 'react';
import { FormCheck } from 'react-bootstrap';

const BrandFilter = ({ brands, onFilterChange }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandChange = brand => {
    let newSelectedBrands = [...selectedBrands];
    if (selectedBrands.includes(brand)) {
      newSelectedBrands = newSelectedBrands.filter(b => b !== brand);
    } else {
      newSelectedBrands.push(brand);
    }
    setSelectedBrands(newSelectedBrands);

    onFilterChange({
      type: 'brand',
      value: newSelectedBrands,
    });
  };

  return (
    <>
      {brands.map((brand, index) => (
        <FormCheck
          key={index}
          type="checkbox"
          id={brand}
          value={brand}
          checked={selectedBrands.includes(brand)}
          label={brand}
          onChange={() => handleBrandChange(brand)}
        />
      ))}
    </>
  );
};

export default BrandFilter;
