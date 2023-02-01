import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        value={searchTerm}
        placeholder="Search products"
        className="me-2"
        aria-label="Search"
        onChange={event => setSearchTerm(event.target.value)}
      />
      <Button variant="outline-success" onClick={handleSearch} className="me-4">
        Search
      </Button>
    </Form>
  );
}

export default Search;
