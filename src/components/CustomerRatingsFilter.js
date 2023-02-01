import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const CustomerRatingsFilter = ({ ratings, onFilterChange }) => {
  const [selectedRating, setSelectedRating] = useState('');

  const handleRatingChange = event => {
    setSelectedRating(event.target.value);
    onFilterChange({
      type: 'rating',
      value: event.target.value,
    });
  };

  return (
    <Form.Group>
      <h5>Customer Ratings</h5>
      <Form.Control as="select" value={selectedRating} onChange={handleRatingChange}>
        <option value="">All</option>
        {ratings.map(rating => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default CustomerRatingsFilter;
