import React, { useState } from 'react';
import BrandsFilter from './BrandsFilter';
import CategoriesFilter from './CategoriesFilter';
import { Accordion } from 'react-bootstrap';

const Filter = ({ brands, categories, ratings, onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterType, filterValue) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: filterValue,
    });
    onFilterChange({ [filterType]: filterValue });
  };

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Brands</Accordion.Header>
        <Accordion.Body>
          <BrandsFilter
            brands={brands}
            selected={selectedFilters.brand}
            onFilterChange={brand => handleFilterChange('brand', brand)}
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Categories</Accordion.Header>
        <Accordion.Body>
          <CategoriesFilter
            categories={categories}
            selected={selectedFilters.category}
            onFilterChange={category => handleFilterChange('category', category)}
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Filter;
