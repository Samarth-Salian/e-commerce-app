import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const SortBy = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState('Price low to high');

  const handleSortChange = e => {
    setSortOption(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <InputGroup>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>Sort by:</span>
      <FormControl
        as="select"
        value={sortOption}
        onChange={handleSortChange}
        style={{ marginLeft: '10px', marginRight: '10px' }}
      >
        <option value="Price low to high">Price: Low to High</option>
        <option value="Price high to low">Price: High to Low</option>
        <option value="New arrivals">New arrivals</option>
      </FormControl>
    </InputGroup>
  );
};

export default SortBy;
