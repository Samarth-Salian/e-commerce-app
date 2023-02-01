import React, { useState, useEffect } from 'react';
import { Table, Button, Row, Col, Form } from 'react-bootstrap';
import { HiOutlineTrash } from 'react-icons/hi2';

const Cart = ({ handleDelete }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="text-center">Your cart is empty. Add some products to get started.</div>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>&#8377;{product.price}</td>
                  <td>
                    <img src={product.imageUrl} alt={product.name} style={{ width: '50px' }} />
                  </td>
                  <td>{product.brand}</td>
                  <td>
                    <Button
                      onClick={() => {
                        setCart(cart.filter(p => p !== product));
                        handleDelete(product);
                      }}
                      variant="danger"
                    >
                      <HiOutlineTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <Col md={{ span: 2, offset: 8 }} className="text-right">
              <Form.Label>Total:</Form.Label>
            </Col>
            <Col md={2}>
              <Form.Label>&#8377;{total.toFixed(2)}</Form.Label>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Cart;
