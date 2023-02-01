import React, { useState } from 'react';
import { FormCheck } from 'react-bootstrap';

const CategoriesFilter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoriesChange = category => {
    let newSelectedCategories = [...selectedCategories];
    if (selectedCategories.includes(category)) {
      newSelectedCategories = selectedCategories.filter(b => b !== category);
    } else {
      newSelectedCategories.push(category);
    }

    setSelectedCategories(newSelectedCategories);

    onFilterChange({
      type: 'category',
      value: newSelectedCategories,
    });
  };

  return (
    <>
      {categories.map((category, index) => (
        <FormCheck
          key={index}
          type="checkbox"
          id={category}
          value={category}
          checked={selectedCategories.includes(category)}
          label={category}
          onChange={() => handleCategoriesChange(category)}
        />
      ))}
    </>
  );
};

export default CategoriesFilter;
